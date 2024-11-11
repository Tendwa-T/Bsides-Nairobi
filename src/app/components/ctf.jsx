"use client";

import { ArrowDropDown } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Box,
  Grid2,
  Grow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function CTFSection() {
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
    <Box px="2em" component={"section"} id="speakers" ref={elementRef}>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDown />}>
          <Typography variant="h5" fontWeight={"300"}>
            Info-Board
          </Typography>
        </AccordionSummary>
        <Grow in={inView} timeout={2500}>
          <Grid2
            container
            spacing={5}
            padding={2}
            justifyContent={"center"}
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Grid2
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                textAlign={"center"}
                variant="h3"
                fontWeight={"100"}
                my="0.5em"
              >
                Books On Offer!!! (Limited Copies)
              </Typography>
              <Box sx={{ width: { xs: "20em", md: "30em" } }}>
                <img
                  src="/images/booksOnOffer.jpeg"
                  alt="Community Choice Talk"
                />
              </Box>
            </Grid2>
            <Grid2
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                textAlign={"center"}
                variant="h3"
                fontWeight={"100"}
                my="0.5em"
              >
                Community Choice Talk
              </Typography>
              <Box sx={{ width: { xs: "20em", md: "30em" } }}>
                <img src="/CTF.jpeg" alt="Community Choice Talk" />
              </Box>
            </Grid2>
            <Grid2
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                textAlign={"center"}
                variant="h3"
                fontWeight={"100"}
                my="0.5em"
              >
                Capture the Flag Challenge
              </Typography>
              <Box sx={{ width: { xs: "20em", md: "30em" } }}>
                <img src="/images/captureTF.jpeg" alt="Community Choice Talk" />
              </Box>
            </Grid2>
          </Grid2>
        </Grow>
      </Accordion>
    </Box>
  );
}
