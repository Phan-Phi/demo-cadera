import { throttle } from "lodash";
import { useMeasure, useUpdateEffect } from "react-use";
import React, { useCallback, useRef, useState } from "react";

import { Box, keyframes, styled, useTheme } from "@mui/material";

import { useMedia } from "@/hooks";
import { CAROUSEL_SERVICE_RATIO } from "@/constants";

import CarouselItem from "../CarouselItem";
import useServiceSize from "./useServiceSize";

const CYCLE_INTERVAL = 8;

const ROTATE_SPEED = 60;

const TRANSFORMATION_COEFFECIENT = 0.1;
const GRADUALLY_DROP_COEFFECIENT = 0.95;

interface ITranformation {
  tX: number;
  tY: number;
}

const defaultTransformation = {
  tX: 0,
  tY: 20,
};

const CarouselService = ({ children }: { children: React.ReactNode }) => {
  const isHold = useRef(false);
  const theme = useTheme();

  const timer = useRef<NodeJS.Timer>();

  const [ref, { width: windowWidth }] = useMeasure();

  const { isMdUp } = useMedia();

  const { width, height } = useServiceSize();

  const [transformation, setTranformation] = useState<ITranformation>(
    defaultTransformation
  );

  const [animationPlayState, setAnimationPlayState] =
    useState<React.CSSProperties["animationPlayState"]>("running");

  const coordinates = useRef({
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
  });

  useUpdateEffect(() => {
    if (isMdUp) return;

    setTranformation(defaultTransformation);
  }, [isMdUp]);

  const updateAnimation = useCallback(() => {
    setTranformation((prev) => {
      let tX =
        prev.tX + coordinates.current.deltaX * TRANSFORMATION_COEFFECIENT;
      let tY =
        prev.tY + coordinates.current.deltaY * TRANSFORMATION_COEFFECIENT;

      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;

      return {
        tX,
        tY,
      };
    });
  }, []);

  const onPointerDownHandler: React.PointerEventHandler<HTMLDivElement> =
    useCallback((e) => {
      clearInterval(timer.current);

      coordinates.current.startX = e.clientX;
      coordinates.current.startY = e.clientY;

      isHold.current = true;
      setAnimationPlayState("paused");
    }, []);
  const onPointerMoveHandler: React.PointerEventHandler<HTMLDivElement> =
    useCallback((e) => {
      if (!isHold.current) return false;

      const { startX, startY } = coordinates.current;

      const newDeltaX = e.clientX - startX;
      const newDeltaY = e.clientY - startY;

      coordinates.current.deltaX = newDeltaX;
      coordinates.current.deltaY = newDeltaY;

      updateAnimation();

      coordinates.current.startX = e.clientX;
      coordinates.current.startY = e.clientY;
    }, []);
  const onPointerUpHandler = useCallback(() => {
    timer.current = setInterval(() => {
      const { deltaX, deltaY } = coordinates.current;

      const newDeltaX = deltaX * GRADUALLY_DROP_COEFFECIENT;
      const newDeltaY = deltaY * GRADUALLY_DROP_COEFFECIENT;

      coordinates.current.deltaX = newDeltaX;
      coordinates.current.deltaY = newDeltaY;
      updateAnimation();

      if (Math.abs(newDeltaX) < 0.5 && Math.abs(newDeltaY) < 0.5) {
        clearInterval(timer.current);
      }
    }, CYCLE_INTERVAL);

    setAnimationPlayState("running");

    isHold.current = false;
  }, []);

  const totalItem = React.Children.count(children);

  return (
    <Container
      ref={ref}
      height={
        isMdUp
          ? theme.breakpoints.values["lg"] / CAROUSEL_SERVICE_RATIO
          : Math.min(windowWidth, theme.breakpoints.values["sm"])
      }
      onPointerDown={isMdUp ? onPointerDownHandler : undefined}
      onPointerMove={isMdUp ? onPointerMoveHandler : undefined}
      onPointerUp={isMdUp ? onPointerUpHandler : undefined}
    >
      <DragContainer
        className="drag-container"
        transform={`rotateX(${-transformation.tY}deg) rotateY(${
          transformation.tX
        }deg) translateY(-50%)`}
        width={width}
        height={height}
      >
        <SpinContainer
          className="spin-container"
          animation={`${spinAnimation} ${ROTATE_SPEED}s infinite linear`}
          animationPlayState={animationPlayState}
          width={width}
          height={height}
        >
          {React.Children.map(children, (el, idx) => {
            return (
              <CarouselItem index={idx} key={idx} total={totalItem}>
                {el}
              </CarouselItem>
            );
          })}
        </SpinContainer>
      </DragContainer>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    display: "flex",
    perspective: "1000px",
  };
});

const Wrapper = styled(Box)(() => {
  return {
    position: "relative",
    userSelect: "none",
    transformStyle: "preserve-3d",
    margin: "auto",
    display: "flex",
  };
});

const DragContainer = styled(Wrapper, {
  shouldForwardProp: (propName) => propName !== "transform",
})<{ transform: React.CSSProperties["transform"] }>(({ transform }) => {
  return {
    transform,
  };
});

const SpinContainer = styled(Wrapper, {
  shouldForwardProp: (propName) =>
    propName !== "animation" && propName !== "animationPlayState",
})<{
  animation: React.CSSProperties["animation"];
  animationPlayState: React.CSSProperties["animationPlayState"];
}>(({ animation, animationPlayState }) => {
  return {
    animation,
    animationPlayState,
  };
});

const spinAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const spinRevertAnimation = keyframes`
  from {
    transform: rotateY(360deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

export default CarouselService;
