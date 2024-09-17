"use client";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { times } from "lodash";
import Marquee from "react-marquee-slider";

export default function PartnerSection() {
  const Photo = styled("img")({
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    width: "368px",
    height: "200px",
    borderRadius: "4px",
    objectFit: "contain",
    objectPosition: "center",
  });
  const photos = [
    "/images/partners/CAK.jpg",
    "/images/partners/ctfroom.png",
    "/images/partners/cyberShujaa.webp",
    "/images/partners/cyberTalent.png",
    "/images/partners/ekraalDark.jpeg",
    "/images/partners/freaks.png",
    "/images/partners/inMark.jpg",
    "/images/partners/KCSFA.png",
    "/images/partners/microsoft.jpg",
    "/images/partners/startinenv2.jpeg",
    "/images/partners/trendMicro.png",
    "/images/partners/usiu-logo.png",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        mt: "5em",
        mb: "4em",
        flexDirection: "column",
      }}
    >
      <Typography
        textAlign={"center"}
        variant="h3"
        fontWeight={100}
        gutterBottom
        sx={{
          mb: "2em",
        }}
      >
        Meet our partners
      </Typography>
      <Box sx={{ height: 200 }}>
        <Marquee velocity={18} direction="ltr">
          {times(7, Number).map((id) => (
            <Photo
              src={photos[id]}
              key={`eventImage-${id}`}
              sx={{ mr: "87px" }}
            />
          ))}
        </Marquee>
      </Box>
      <Box sx={{ height: "5em" }} />
      <Marquee velocity={18} direction="ltr">
        {times(5, Number).map((id) => (
          <Photo
            src={photos[id + 7]}
            key={`eventImage-${id + 7}`}
            sx={{ mr: "7px", ml: "80px" }}
          />
        ))}
      </Marquee>
    </Box>
  );
}
