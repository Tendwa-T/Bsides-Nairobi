"use client";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { times } from "lodash";
import Marquee from "react-marquee-slider";

export default function ImageMarquee() {
  const Photo = styled("img")({
    width: "368px",
    height: "200px",
    borderRadius: "4px",
    objectFit: "cover",
    objectPosition: "top",
  });

  const photos = [
    "/images/gallery/event1.JPG",
    "/images/gallery/event10.JPG",
    "/images/gallery/event11.JPG",
    "/images/gallery/event12.JPG",
    "/images/gallery/event13.JPG",
    "/images/gallery/event14.JPG",
    "/images/gallery/event2.JPG",
    "/images/gallery/event3.JPG",
    "/images/gallery/event4.JPG",
    "/images/gallery/event5.JPG",
    "/images/gallery/event6.JPG",
    "/images/gallery/event7.JPG",
    "/images/gallery/event8.JPG",
    "/images/gallery/event9.JPG",
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
        Some of our Awesome Moments together
      </Typography>
      <Box sx={{ height: 200 }}>
        <Marquee velocity={16}>
          {times(7, Number).map((id) => (
            <Photo
              src={photos[id]}
              key={`eventImage-${id}`}
              sx={{ ml: "87px" }}
            />
          ))}
        </Marquee>
      </Box>
      <Box sx={{ height: "5em" }} />
      <Marquee velocity={16}>
        {times(7, Number).map((id) => (
          <Photo
            src={photos[id + 7]}
            key={`eventImage-${id + 7}`}
            sx={{ ml: "7px", mr: "80px" }}
          />
        ))}
      </Marquee>
    </Box>
  );
}
