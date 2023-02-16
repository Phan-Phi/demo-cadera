import React from "react";
import { useTimeout, useWindowSize } from "react-use";
import { Box, styled } from "@mui/material";

import { useMedia } from "@/hooks";
import useServiceSize from "./Service/useServiceSize";

interface ICardItem {
  index: number;
  children: React.ReactNode;
  total: number;
}

const ServiceItem = ({ index, children, total }: ICardItem) => {
  const [isReady] = useTimeout(1000);

  const { isSmDown, isMdDown } = useMedia();

  const { width: windowWidth } = useWindowSize();

  const { width, height } = useServiceSize();

  const MAXIMUM_DIAMETER = 800;
  const MAXIMUM_PERIMETER = MAXIMUM_DIAMETER / 2;

  let SAFE_ZONE = 0;

  if (isMdDown) {
    SAFE_ZONE = 48;
  }

  if (isSmDown) {
    SAFE_ZONE = 32;
  }

  const PERIMETER = Math.min(MAXIMUM_PERIMETER, windowWidth / 2 - SAFE_ZONE);

  return (
    <StyledItem
      transform={
        isReady()
          ? `rotateY(${index * (360 / total)}deg) translateZ(${PERIMETER}px)`
          : undefined
      }
      width={width}
      height={height}
    >
      {children}
    </StyledItem>
  );
};

const StyledItem = styled(Box, {
  shouldForwardProp: (propName) => propName !== "transform",
})<{
  transform: React.CSSProperties["transform"];
}>(({ transform }) => {
  return {
    position: "absolute",
    transition: "transform 1s",
    userSelect: "none",
    transform,
  };
});

export default ServiceItem;
