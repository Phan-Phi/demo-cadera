import { Button, styled, Typography } from "@mui/material";

import Box from "./Box/Box";

import { useMedia } from "@/hooks";
import { BUTTON } from "@/constants";
import Link from "./Link";

interface CTAContentProps {
  subTitle: string;
  title: string;
}

export default function CTAContent({ subTitle, title }: CTAContentProps) {
  const { isSmDown } = useMedia();

  return (
    <Box>
      <SubTitle>{subTitle}</SubTitle>

      <Title variant={isSmDown ? "h3" : "h1"}>{title}</Title>

      <Box variant="centerCenter">
        <Link href="/contact">
          <StyleButton>{BUTTON.CONTACT_US}</StyleButton>
        </Link>
      </Box>
    </Box>
  );
}

const SubTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.hairline1,
    color: theme.palette.neutral.neutral4,
    marginBottom: "0.75rem",
  };
});
const Title = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.white,
    marginBottom: "2.5rem",
  };
});
const StyleButton = styled(Button)(({ theme }) => {
  return {
    color: theme.palette.common.white,
  };
});
