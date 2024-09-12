"use client";

import { Box, styled, Typography } from "@mui/material";
import { times } from "lodash";
import Marquee from "react-marquee-slider";

export default function ImageMarquee() {
  const Photo = styled("img")({
    width: "368px",
    height: "200px",
    borderRadius: "4px",
    boxShadow: "0 7px 20px 0 rgba(0,0,0,0.12)",
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
        height: "40em",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <Typography
        textAlign={"center"}
        variant="h4"
        fontWeight={100}
        gutterBottom
      >
        Some of our Awesome Moments together
      </Typography>
      <Box sx={{ height: 200 }}>
        <Marquee velocity={20}>
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
      <Marquee velocity={20}>
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
