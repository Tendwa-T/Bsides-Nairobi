"use client";

import LandingSection from "./components/landingSection";
import NavBarComponent from "./components/navbar";
import AboutSection from "./components/aboutSection";
import FooterSection from "./components/footerSection";
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
import EventSection from "./components/eventSection";
import ImageMarquee from "./components/images";
import GetTicketesSection from "./components/tickets";
import DonateSection from "./components/donate";
import PartnerSection from "./components/partners";
import SpeakersSection from "./components/speakers";
import CTFSection from "./components/ctf";
import ProgSection from "./components/programSection";
import { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";

export default function Home() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  const endDate = new Date("2024-11-15");
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
            <Typography textAlign={"center"} fontWeight={"bold"} variant="h5">
              Thank You !!😁
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
                src="/images/2024/thankYou.jpeg"
                width={500}
                height={500}
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
                To our partners, friends, and attendees—thank you for making the
                BSides 2024 conference a success. We couldn&apos;t have done it
                without you!
                <br />
              </Typography>

              <Typography textAlign={"center"}>
                Give us{" "}
                <a
                  href="https://forms.gle/E3jDhxMjrK6YChyo6"
                  target="_blank"
                  className="text-blue-600 hover:text-cyan-600"
                >
                  Feedback
                </a>{" "}
                on the event.
              </Typography>

              <Typography textAlign={"center"}>
                See the{" "}
                <a
                  href="https://edushotit38.pixieset.com/besidesnairobi/"
                  target="_blank"
                  className="text-blue-600 hover:text-cyan-600"
                >
                  Pictures
                </a>{" "}
                from our event.
              </Typography>
            </Box>
          </DialogContent>
        </Dialog>
      )}

      <Box sx={{ display: "flex", flexDirection: "column", width: "100vw" }}>
        <NavBarComponent
          navItems={[
            { title: "Home", route: "/", sectionID: "" },
            { title: "About", route: "/", sectionID: "about" },
          ]}
        />
        <LandingSection
          image={"url(/images/nairobi.jpg)"}
          // Event Data Goes here
          eventData={{
            main: "Upcoming Event:",
            secondary: {
              main: "Vulnerability Disclosure and Bug Bounty Edition",
              sec: "Date: July 7th 2025",
              ter: "Location: Michael Joseph Centre, Nairobi",
            },
            tertiary: "",
          }}
        />
        <AboutSection />
        {/* <EventSection />
        <SpeakersSection />
        <CTFSection />
        <ProgSection />
        <GetTicketesSection /> */}
        {/* <DonateSection /> */}
        <PartnerSection />
        <ImageMarquee />
        <FooterSection />
      </Box>
    </>
  );
}
