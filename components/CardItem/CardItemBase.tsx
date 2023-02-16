import { forwardRef } from "react";

import BoxWithShadow, { BoxWithShadowProps } from "components/Box/BoxWithShadow";
import { styled } from "@mui/material";

interface ExtraProps {
  mode?: "light" | "dark";
}

export interface CardItemBaseProps extends BoxWithShadowProps, ExtraProps {}

const CardItemBase = forwardRef<HTMLDivElement, CardItemBaseProps>(function CardItemBase(
  props,
  ref
) {
  return <StyledCardItemBaseProps padding={2} borderRadius={2} {...props} ref={ref} />;
});

const StyledCardItemBaseProps = styled(BoxWithShadow, {
  shouldForwardProp: (propName) => propName !== "mode",
})<ExtraProps>(({ theme, mode }) => {
  return {
    backgroundColor:
      mode === "dark" ? theme.palette.common.black : theme.palette.common.white,
  };
});

export default CardItemBase;
