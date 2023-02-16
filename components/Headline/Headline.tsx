import React from "react";

import { Stack, Typography, useTheme, StackProps } from "@mui/material";

interface HeadlineProps extends StackProps {
  title: string;
  subTitle?: string;
}

/**
 * @param {*} title - required
 * @param {*} subTitle - optional
 */

export default function Headline({ title, subTitle, ...restProps }: HeadlineProps) {
  const theme = useTheme();
  return (
    <Stack rowGap={1} alignItems="center" justifyContent="center" {...restProps}>
      <Typography variant="h2" color={theme.palette.primary.main}>
        {title}
      </Typography>
      <Typography variant="caption" color={theme.palette.neutral.neutral4}>
        {subTitle}
      </Typography>
    </Stack>
  );
}
