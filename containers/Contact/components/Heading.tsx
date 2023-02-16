import { styled, Typography, TypographyProps } from "@mui/material";
import React from "react";

interface headingProps extends TypographyProps {
  title: string;
}

const Heading = (props: headingProps) => {
  const { title } = props;
  return <StyledContextBody1Bold {...props}>{title}</StyledContextBody1Bold>;
};

const StyledContextBody1Bold = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.body1Bold,
    color: theme.palette.primary.main,
    textAlign: "center",
  };
});

export default Heading;
