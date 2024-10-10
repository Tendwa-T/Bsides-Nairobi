"use client";

import { Info } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { useRef, useState, useEffect } from "react";

export default function RecapReports({ reportData }) {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "#report") {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
      });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        },
        { threshold: 1 },
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }
  }, []);

  return (
    <Box
      component={"section"}
      id="report"
      ref={elementRef}
      sx={{
        height: "20vh",
        pt: "1em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontSize: "1.2em", px: "1em" }}
        textAlign={"center"}
        justifyContent={"center"}
      >
        <Info /> To get the full report on the {reportData.year} BSides Nairobi
        event{" "}
        <Link
          target="_blank"
          rel="noopener"
          href={reportData.doc}
          download={`BSides Nairobi ${reportData.year} Report`}
        >
          Click here
        </Link>
      </Typography>
    </Box>
  );
}
