import React from "react";
import { Typography } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";

import { Box } from "@/components";

type ErrorBoundaryWrapperProps = {
  children?: React.ReactNode;
};

const ErrorBoundaryWrapper = ({ children }: ErrorBoundaryWrapperProps) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};

// props: FallbackProps

function ErrorFallback() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" color="error">
        Đã có lỗi xảy ra vui lòng thử lại sau!
      </Typography>
    </Box>
  );
}

export default ErrorBoundaryWrapper;
