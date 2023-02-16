import { useMedia } from "@/hooks";
import { Container, styled, Typography } from "@mui/material";

interface HeroContentProps {
  title: string;
  subTitle: string;
}

export default function HeroContent({ title, subTitle }: HeroContentProps) {
  const { isSmDown } = useMedia();

  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </>
  );
}

const Title = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h4,
    color: theme.palette.primary.main,
    marginBottom: "0.5rem",
  };
});
const SubTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.body2,
    color: theme.palette.common.black,
    textAlign: "justify",
  };
});
