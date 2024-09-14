"use client";

import { Box, Link, Typography } from "@mui/material";

export default function AboutSection() {
  return (
    <Box
      id="about"
      component={"section"}
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        pt: "5em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          textAlign={"center"}
          fontWeight={"100"}
          fontSize={"3em"}
        >
          About Bsides Nairobi
        </Typography>
        <Box sx={{ height: "2em" }} />
        <Box sx={{ px: { xs: "1em", lg: "10em" } }}>
          <Typography variant="body1" textAlign={"center"} fontSize={"1.2em"}>
            Security BSides is a non-profit, community-driven, event built for
            and by members of the information security community. This creates
            opportunities for individuals to both present and participate in an
            intimate atmosphere that encourages innovation, inclusivity,
            networking and collaboration. Our aim is to help develop the
            Information Security community in Kenya. If you would like to learn
            more or get involved, please email{" "}
            <Link href="mailto:info@bsidesnairobi.ke" target="_blank">
              info@bsidesnairobi.ke
            </Link>
          </Typography>
        </Box>
        <Box sx={{ height: "2em" }} />
      </Box>
    </Box>
  );
}
