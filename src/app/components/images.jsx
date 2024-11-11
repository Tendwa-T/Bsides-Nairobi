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
    "/images/2024/Recap/IMG_1449.jpg",
    "/images/2024/Recap/IMG_1464.jpg",
    "/images/2024/Recap/IMG_1482.jpg",
    "/images/2024/Recap/IMG_1490(1).jpg",
    "/images/2024/Recap/IMG_1495.jpg",
    "/images/2024/Recap/IMG_1500.jpg",
    "/images/2024/Recap/IMG_1530.jpg",
    "/images/2024/Recap/IMG_1539.jpg",
    "/images/2024/Recap/IMG_1573.jpg",
    "/images/2024/Recap/IMG_1574.jpg",
    "/images/2024/Recap/IMG_1587.jpg",
    "/images/2024/Recap/IMG_1597.jpg",
    "/images/2024/Recap/IMG_1623.jpg",
    "/images/2024/Recap/IMG_1627.jpg",
    "/images/2024/Recap/IMG_1642.jpg",
    "/images/2024/Recap/IMG_1645.jpg",
    "/images/2024/Recap/IMG_1704.jpg",
    "/images/2024/Recap/IMG_1685.jpg",
    "/images/2024/Recap/IMG_1680.jpg",
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
          {times(15, Number).map((id) => (
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
        {times(15, Number).map((id) => (
          <Photo
            src={photos[id + 15]}
            key={`eventImage-${id + 15}`}
            sx={{ ml: "7px", mr: "80px" }}
          />
        ))}
      </Marquee>
    </Box>
  );
}
