import { Box, styled, BoxProps } from "@mui/material";

interface StyledBoxProps extends BoxProps {
  backgroundColor: string;
}

export default function WrapperSectionImage({
  children,
  backgroundColor = "none",
}: {
  children: React.ReactNode;
  backgroundColor?: React.CSSProperties["backgroundColor"];
}) {
  return <StyledBox backgroundColor={backgroundColor}>{children}</StyledBox>;
}

const StyledBox = styled(Box, {
  shouldForwardProp: (propName) => {
    return propName !== "backgroundColor";
  },
})<StyledBoxProps>(({ theme, backgroundColor }) => {
  return {
    backgroundColor,
    padding: "5rem 0",
  };
});
