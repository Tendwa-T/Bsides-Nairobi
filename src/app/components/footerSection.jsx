import { Box, Typography } from "@mui/material";

export default function FooterSection() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: "5em",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "black",
          color: "white",
        }}
      >
        <Typography>&copy; All Rights Reserved 2024</Typography>
      </Box>
    </>
  );
}
