"use client";

import { ArrowDropDown } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid2,
  Grow,
  Typography,
} from "@mui/material";
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

  const speakers = [
    {
      name: "Kelvin Mbogo",
      img: "/images/speaker1.jpeg",
      topic: "",
    },
    {
      name: "Dennis Mburu",
      img: "/images/speaker2.jpeg",
      topic: "",
    },
    {
      name: "John Kuria",
      img: "/images/speaker3.jpeg",
      topic: "",
    },
    {
      name: "Moses Mrima Mbanga",
      img: "/images/speaker4.jpeg",
      topic: "",
    },
    {
      name: "Cephas Okoth",
      img: "/images/speaker5.jpeg",
      topic: "",
    },
    {
      name: "Dennis Kori Gichuki",
      img: "/images/speaker6.jpeg",
      topic: "",
    },
    {
      name: "Alvin Mwambi",
      img: "/images/speaker7.jpeg",
      topic: "",
    },
  ];

  return (
    <Box px="2em" component={"section"} id="speakers" ref={elementRef}>
      <Typography
        textAlign={"center"}
        variant="h3"
        fontWeight={"100"}
        mt="0.5em"
      >
        Event Details
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDown />}>
          <Typography
            textAlign={"center"}
            variant="h5"
            fontWeight={"300"}
            mt="0.5em"
          >
            Speakers
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grow in={inView} timeout={2500}>
            <Grid2 container spacing={3} padding={2} justifyContent={"center"}>
              {speakers.map((sp, index) => (
                <Grid2 key={index}>
                  <Box sx={{ width: { xs: "20em", md: "30em" } }}>
                    <img src={sp.img} alt={sp.name} />
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Grow>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
