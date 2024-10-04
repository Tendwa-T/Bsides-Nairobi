"use client";

import { Box, CircularProgress, Skeleton, Typography } from "@mui/material";

export default function LoadingPage() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={50} />
      <Typography variant="h3">Loading</Typography>
    </Box>
  );
}
