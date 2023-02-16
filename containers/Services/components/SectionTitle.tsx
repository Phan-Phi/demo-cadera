import React from "react";

import { Grid, styled, Typography, useTheme } from "@mui/material";

import { useMedia } from "@/hooks";
import { Spacing, Box } from "@/components";

type SectionTitleProps = {
  title: string;
  short_desc: string;
};

export default function SectionTitle({ title, short_desc }: SectionTitleProps) {
  const theme = useTheme();
  const { isSmDown } = useMedia();
  return (
    <Box>
      <StyledSmallText>Our Services</StyledSmallText>

      <Spacing spacing={1} />

      <Typography
        color={theme.palette.primary.main}
        variant={isSmDown ? "h4" : "h2"}
      >
        {title}
      </Typography>

      <Grid container>
        <Grid item xs={6}>
          <Typography
            variant={isSmDown ? "caption2" : "body2"}
            color={theme.palette.neutral.neutral3}
          >
            {short_desc}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

const StyledSmallText = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.hairline2,
    color: theme.palette.neutral.neutral4,
    textTransform: "uppercase",
  };
});
