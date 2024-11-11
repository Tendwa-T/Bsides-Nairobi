"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import NavBarComponent from "@/app/components/navbar";
import LandingSection from "@/app/components/landingSection";
import AboutSection from "@/app/components/aboutSection";
import EventSection from "@/app/components/eventSection";
import SpeakersSection from "@/app/components/speakers";
import CTFSection from "@/app/components/ctf";
import ProgSection from "@/app/components/programSection";
import GetTicketesSection from "@/app/components/tickets";
import DonateSection from "@/app/components/donate";
import PartnerSection from "@/app/components/partners";
import ImageMarquee from "@/app/components/images";
import FooterSection from "@/app/components/footerSection";

export default function Recap2024() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  const endDate = new Date("2024-11-08");
  const today = Date.now();

  let diff = Math.floor((endDate - today) / (1000 * 3600 * 24));

  return (
    <>
      {diff > 0 && (
        <Dialog
          maxWidth={"md"}
          fullWidth
          onClose={handleClose}
          open={open}
          disableEnforceFocus
        >
          <DialogActions>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </DialogActions>
          <DialogTitle>
            <Typography textAlign={"center"} variant="h5">
              Grab Your BSides Bundle Ticket Now! 🎟️
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                justifySelf: "center",
              }}
            >
              <img
                src="/images/tickets.jpeg"
                width={500}
                height={200}
                alt="Ticket Modal Image"
              />
            </Box>
            <Box sx={{ my: "1em" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                justifySelf: "center",
                width: { md: "30em" },
              }}
            >
              <Typography textAlign={"center"}>
                <strong>BSides Nairobi is ON!</strong>
              </Typography>
              <Typography textAlign={"center"}>
                Don&apos;t miss out on {diff} day of mind-blowing talks,
                hands-on workshops, and networking opportunities with
                cybersecurity experts.
                <br />
              </Typography>
              <Typography textAlign={"center"}>
                <strong>Get your ticket now!</strong>
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              href="https://paydexp.com/bsides-nairobi-2024-conference"
              target="_blank"
            >
              Buy
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <Box sx={{ display: "flex", flexDirection: "column", width: "100vw" }}>
        <NavBarComponent
          navItems={[
            { title: "Home", route: "/", sectionID: "" },
            { title: "About", route: "/", sectionID: "about" },
            { title: "Events", route: "/", sectionID: "event" },
          ]}
        />
        <LandingSection
          image={"url(/images/2024/Recap/IMG_1685.jpg)"}
          // Event Data Goes here
          /*  eventData={{
            main: "Theme: New Frontiers",
            secondary: {
              main: "5th - 8th November",
              sec: " 5th & 6th - Training",
              ter: "7th & 8th - Conference",
            },
            tertiary: "United States International University - Africa",
          }} */
          recapData={{
            img: "/2024Recap.svg",
          }}
        />
        <AboutSection />
        <EventSection />
        <SpeakersSection />
        <CTFSection />
        <ProgSection />
        <GetTicketesSection />
        <DonateSection />
        <PartnerSection />
        <ImageMarquee />
        <FooterSection />
      </Box>
    </>
  );
}
