"use client";

import { Box, Grid2, Grow, Typography } from "@mui/material";
import { useRef, useState, useEffect } from "react";

export default function SpeakersSection() {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "#speakers") {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <Box py="1em" component={"section"} id="speakers" ref={elementRef}>
      <Grow in={inView} {...(inView ? { timeout: 1000 } : {})}>
        <Typography
          textAlign={"center"}
          variant="h3"
          fontWeight={"100"}
          mt="0.5em"
        >
          Speakers
        </Typography>
      </Grow>
      <Grow in={inView} timeout={2500}>
        <Grid2 container spacing={2} padding={2} justifyContent={"center"}>
          <Grid2>
            <Box sx={{ width: { xs: "20em", md: "25em" } }}>
              <img src="/images/speaker1.jpeg" alt="Speaker Poster" />
            </Box>
          </Grid2>
          <Grid2>
            <Box sx={{ width: { xs: "20em", md: "25em" } }}>
              <img src="/images/speaker2.jpeg" alt="Speaker Poster" />
            </Box>
          </Grid2>
          <Grid2>
            <Box sx={{ width: { xs: "20em", md: "25em" } }}>
              <img
                src="/images/speaker3.jpeg"
                alt="Speaker Poster"
                width={400}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Grow>
    </Box>
  );
}
