"use client";

import { Box, Grow, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function CallForPapersSection() {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "#cfp") {
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
      id="cfp"
      ref={elementRef}
      sx={{
        display: "flex",
        width: "100vw",
        pt: "3em",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          width: "100vw",
          my: "1em",
          px: "1em",
          justifyContent: "space-around",
        }}
      >
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
            <Typography variant="h5" textAlign={"center"}>
              Would you like to give a talk during our event?{" "}
              <Link href="https://www.papercall.io/bsidesnrb24">
                Click here
              </Link>{" "}
              For more information
            </Typography>
          </Box>
        </Grow>
        <Grow in={inView} timeout={1500}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: "0.7em",
            }}
          >
            <Image
              src={"/images/callForPapers.jpeg"}
              alt="Event Poster"
              width={500}
              height={400}
            />
          </Box>
        </Grow>
      </Box>
    </Box>
  );
}
