"use client";

import { Box, Grow, Typography } from "@mui/material";
import { useRef, useState, useEffect } from "react";

export default function RecapEventSection({ eventData }) {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  const paragraphs = eventData.textData.split("\n\n");

  useEffect(() => {
    if (window.location.hash === "#event") {
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
    <Box
      component={"section"}
      id="event"
      ref={elementRef}
      sx={{
        display: "flex",
        width: "100vw",
        pt: "5em",
        flexDirection: "column",
        bgcolor: "whitesmoke",
      }}
    >
      <Typography
        textAlign={"center"}
        variant="h2"
        fontWeight={100}
        fontSize={"3em"}
      >
        {eventData.title}
      </Typography>
      <Typography textAlign={"center"} variant="h4" fontWeight={400}>
        {eventData.theme}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100vw",
          my: "2em",
          px: "1em",
          justifyContent: "space-around",
        }}
      >
        <Grow in={inView} timeout={1500}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: "1em",
            }}
          >
            <img
              src={eventData.eventPoster}
              alt="Event Poster"
              width={500}
              height={400}
            />
          </Box>
        </Grow>
        <Grow in={inView} {...(inView ? { timeout: 2000 } : {})}>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              maxWidth: { xs: "100%", md: "50%" },
              flexDirection: "column",
            }}
          >
            {paragraphs.map((par, index) => (
              <Typography
                key={index}
                textAlign={"center"}
                variant="body1"
                component={"span"}
                sx={{ fontSize: { xs: "1em", sm: "1.5em" } }}
              >
                {par}
                {index == paragraphs.length ? (
                  <></>
                ) : (
                  <>
                    <br /> <br />
                  </>
                )}
              </Typography>
            ))}
          </Box>
        </Grow>
      </Box>
    </Box>
  );
}
