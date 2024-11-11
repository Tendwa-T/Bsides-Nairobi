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
            5th November - Training
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
                <img src="/images/training102.jpeg" alt="Training Day 1" />
              </Box>
            </Grid2>{" "}
            <Grid2>
              <Box sx={{ width: { md: "45em" } }}>
                <img src="/images/progDayT011.jpeg" alt="Training Day 1" />
              </Box>
            </Grid2>
          </Grid2>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDown />}>
          <Typography variant="h5" fontWeight={"300"}>
            6th November - Training
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
                <img src="/images/training202.jpeg" alt="Training Day 2" />
              </Box>
            </Grid2>
            <Grid2>
              <Box sx={{ width: { md: "45em" } }}>
                <img src="/images/progDayT021.jpeg" alt="Training Day 2" />
              </Box>
            </Grid2>
          </Grid2>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDown />}>
          <Typography variant="h5" fontWeight={"300"}>
            7th November - Conference
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
                <img src="/images/day301.jpeg" alt="Day 3" />
              </Box>
            </Grid2>
            <Grid2>
              <Box sx={{ width: { md: "45em" } }}>
                <img src="/images/day302.jpeg" alt="Day 3" />
              </Box>
            </Grid2>
          </Grid2>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDown />}>
          <Typography variant="h5" fontWeight={"300"}>
            8th November - Conference
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
                <img src="/images/day401.jpeg" alt="Day 4" />
              </Box>
            </Grid2>
            <Grid2>
              <Box sx={{ width: { md: "45em" } }}>
                <img src="/images/day402.jpeg" alt="Day 4" />
              </Box>
            </Grid2>
          </Grid2>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
