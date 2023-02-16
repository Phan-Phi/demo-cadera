import React from "react";
import CardItemBase from "@/components/CardItem/CardItemBase";
import { Typography, Button, Divider, useTheme, styled } from "@mui/material";
import Stack from "@/components/Stack";
import CalendarOutlined from "@/components/Icon/CalendarOutlined";

const CardItemForJob = () => {
  const theme = useTheme();
  return (
    <CardItemBase borderRadius={"16px"}>
      <Stack gap={"13px"}>
        <StyledStackHeading>
          <Typography>Junior Developer</Typography>
          <StyledButton variant={"outlined"} color={"success"}>
            OPEN
          </StyledButton>
        </StyledStackHeading>

        <Divider light />

        <StyledStackContent>
          <CalendarOutlined />
          <Typography variant="caption2" color={theme.palette.neutral.neutral4}>
            Deadline
          </Typography>
          <Typography variant="caption2Bold">03/26/2023</Typography>
        </StyledStackContent>
      </Stack>
    </CardItemBase>
  );
};

const StyledStackHeading = styled(Stack)(() => {
  return {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };
});

const StyledStackContent = styled(Stack)(() => {
  return {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  };
});

const StyledButton = styled(Button)(() => {
  return {
    boxSizing: "border-box",
    color: "#45B36B",
    fontSize: 12,
    padding: 4,
    borderRadius: 4,
    "&:hover": {
      backgroundColor: "#45B36B",
    },
  };
});

export default CardItemForJob;
