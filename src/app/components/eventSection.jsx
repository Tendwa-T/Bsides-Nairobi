"use client";

import { Box, Grow, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function EventSection() {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

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
        BSides Conference 2024:
      </Typography>
      <Typography textAlign={"center"} variant="h4" fontWeight={400}>
        New Frontiers
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
            <Image
              src={"/images/poster.jpeg"}
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
            <Typography
              textAlign={"center"}
              variant="body1"
              component={"span"}
              sx={{ fontSize: { xs: "1em", sm: "1.5em", md: "2em" } }}
            >
              The 2024 BSides Nairobi conference, themed &quot;
              <b>New Frontiers</b>&quot;, will focus on four key areas: <br />
            </Typography>
            <Box
              sx={{
                justifySelf: "center",
                alignSelf: "center",
                fontSize: { xs: "1em", sm: "1.5em" },
              }}
            >
              <b>
                <ul>
                  <li>- Critical Information Infrastructure</li>
                  <li>- Cloud Computing</li>
                  <li>- Artificial Intelligence</li>
                  <li>- Data Privacy</li>
                </ul>
              </b>
            </Box>
            <Typography
              textAlign={"center"}
              variant="body1"
              sx={{ fontSize: { xs: "1em", sm: "1.5em" } }}
            >
              We are seeking innovative presentations with practical
              demonstrations or actionable research, with an emphasis on policy
              and governance. We have two presentation slots reserved for
              academic contributors, highlighting the importance of scholarly
              input. To elevate the event, preference will be given to speakers
              with practical experience, ensuring presentations are grounded in
              real-world applications. Our goal is to explore the latest in
              cybersecurity and address current and future challenges.
            </Typography>
          </Box>
        </Grow>
      </Box>
    </Box>
  );
}
