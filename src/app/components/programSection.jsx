"use client";

import { ArrowDropDown } from "@mui/icons-material";

const {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid2,
} = require("@mui/material");

export default function ProgSection() {
  return (
    <Box sx={{ p: "2em" }}>
      <Typography textAlign={"center"} variant="h3" fontWeight={100}>
        Program
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDown />}>
          <Typography variant="h5" fontWeight={"300"}>
            Day 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid2
            container
            spacing={2}
            padding={2}
            sx={{ justifyContent: "center" }}
          >
            <Grid2>
              <Box sx={{ width: { md: "45em" } }}>
                <img src="/images/training1201.jpeg" />
              </Box>
            </Grid2>
            <Grid2>
              <Box sx={{ width: { md: "45em" } }}>
                <img src="/images/training102.jpeg" />
              </Box>
            </Grid2>
          </Grid2>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDown />}>
          <Typography variant="h5" fontWeight={"300"}>
            Day 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid2
            container
            spacing={2}
            padding={2}
            sx={{ justifyContent: "center" }}
          >
            {/*  <Grid2>
              <Box sx={{ width: { md: "45em" } }}>
                <img src="/images/training201.jpeg" />
              </Box>
            </Grid2> */}
            <Grid2>
              <Box sx={{ width: { md: "45em" } }}>
                <img src="/images/training1201.jpeg" />
              </Box>
            </Grid2>
          </Grid2>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDown />}>
          <Typography variant="h5" fontWeight={"300"}>
            Day 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid2
            container
            spacing={2}
            padding={2}
            sx={{ justifyContent: "center" }}
          >
            <Grid2>
              <Box sx={{ width: { md: "45em" } }}>
                <img src="/images/progDay101.jpeg" />
              </Box>
            </Grid2>
            <Grid2>
              <Box sx={{ width: { md: "45em" } }}>
                <img src="/images/progDay102.jpeg" />
              </Box>
            </Grid2>
          </Grid2>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDown />}>
          <Typography variant="h5" fontWeight={"300"}>
            Day 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid2
            container
            spacing={2}
            padding={2}
            sx={{ justifyContent: "center" }}
          >
            <Grid2>
              <Box sx={{ width: { md: "45em" } }}>
                <img src="/images/progDay201.jpeg" />
              </Box>
            </Grid2>
            <Grid2>
              <Box sx={{ width: { md: "45em" } }}>
                <img src="/images/progDay202.jpeg" />
              </Box>
            </Grid2>
          </Grid2>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
