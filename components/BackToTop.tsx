import { useWindowScroll } from "react-use";
import { useCallback, useEffect, useState } from "react";
import { Box, Slide, styled, useTheme } from "@mui/material";
import { ArrowDownSimpleOutlined } from "./Icon";

const BackToTop = () => {
  const theme = useTheme();

  const { y } = useWindowScroll();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (y > 500 && !shouldAnimate) {
      setShouldAnimate(true);
    }

    if (y < 500 && shouldAnimate) {
      setShouldAnimate(false);
    }
  }, [y, shouldAnimate]);

  const onClickHandler = useCallback(() => {
    if (typeof window == undefined) return;

    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <Slide direction="up" in={shouldAnimate} mountOnEnter>
      <Wrapper onClick={onClickHandler}>
        <ArrowDownSimpleOutlined
          style={{
            transform: "rotate(180deg)",
            color: theme.palette.neutral.neutral8,
          }}
        />
      </Wrapper>
    </Slide>
  );
};
const Wrapper = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
    width: "2.5rem",
    height: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
    zIndex: 999,
    boxShadow: theme.shadows[5],
    transition: `${theme.transitions.duration.standard}ms`,
    ["&:hover"]: {
      opacity: 0.8,
    },
  };
});

export default BackToTop;
