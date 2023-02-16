import { useMedia } from "@/hooks";
import { styled, Typography } from "@mui/material";

import Box from "./Box/Box";

interface ContentBlockProps {
  title: string;
  subTitle: string;
  text: string;
}

export default function ContentBlock({ title, subTitle, text }: ContentBlockProps) {
  const { isSmDown } = useMedia();

  return (
    <StyledBox>
      <Title variant={isSmDown ? "body1Bold" : "hairline3"}>{title}</Title>

      <SubTitle variant={isSmDown ? "caption2Bold" : "body1Bold"}>{subTitle}</SubTitle>

      <Text variant={isSmDown ? "caption2" : "body2"}>{text}</Text>
    </StyledBox>
  );
}

const Title = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    marginBottom: ".5rem",
    display: "block",
  };
});
const SubTitle = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.white,
    marginBottom: ".5rem",
    display: "block",
  };
});
const Text = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.white,
    display: "block",
  };
});

const StyledBox = styled(Box)(({ theme }) => {
  return {
    marginBottom: "1.5rem",
  };
});
