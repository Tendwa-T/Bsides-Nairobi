"use client";

import { Box, Grow, Link, Typography } from "@mui/material";
import { useRef, useState, useEffect } from "react";

export default function DonateSection() {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "#donate") {
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
      id="donate"
      ref={elementRef}
      sx={{
        display: "flex",
        width: "100vw",
        pt: "3em",
        flexDirection: "column",
        bgcolor: "whitesmoke",
        pb: { xs: "1em", md: "2em" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100vw",
          my: "1em",
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
              p: "0.7em",
            }}
          >
            <img
              src={"/images/donate.jpeg"}
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
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Typography
              variant="h5"
              textAlign={"center"}
              sx={{
                py: { xs: "3em", sm: "2em" },
                fontSize: { xs: "1em", sm: "1.5em" },
              }}
            >
              Do you like the work we are doing at BSides?{" "}
              <Link
                href="https://paydexp.com/contribution/bsides-2024-conference"
                target="_blank"
              >
                Click here
              </Link>{" "}
              To support us
            </Typography>
          </Box>
        </Grow>
      </Box>
    </Box>
  );
}
