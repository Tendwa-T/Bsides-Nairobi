import { Box, Typography } from "@mui/material";

export default function FooterSection() {
  const year = new Date().getFullYear();
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
        }}
      >
        <Typography sx={{ color: 'gray' }}>&copy; All Rights Reserved {year} </Typography>
      </Box>
    </>
  );
}
