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
import SpeakersSectionRedesign from "./components/speakersRedesign";

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

  const speakers = [
    {
      name: "Samwel Mutua",
      title: "Cyber Assurance-M-Pesa Africa",
      img: "/images/2025/speakers/SamwelMutua.jpeg",
      topic:
        "The Triager's Tightrope: Balancing Speed, Accuracy, and Collaboration in Bug Bounty Programs",
      description:
        "Triagers walk a tightrope, quickly assessing your bug reports while ensuring accuracy and fostering collaboration. This talk reveals how we process your submissions, what makes a report shine, and how you can help us prioritize your findings to boost your success in bug bounty programs.",
    },
    {
      name: "Cheroben Alvin",
      title: "Bug Bounty Hunter, CTO @Metanetwebhosting",
      img: "/images/2025/speakers/CherobenAlvin.jpg",
      topic: "Cool Bugs and Real Stories: Lessons from the Bug Bounty hunting",
      description:
        "I'm Cheroben Alvin (Crius), and today I'm excited to share some real stories from my bug bounty hunting journey. The cool bugs I've discovered, the challenges I faced, and the lessons I learned along the way. Bug bounty hunting is not just about finding vulnerabilities, it's about creativity, persistence, and thinking outside the box. Whether you're new to bug hunting or a seasoned pro, I hope these stories inspire you to sharpen your skills and maybe even discover your next big find.",
    },
    {
      name: "Alfie Njeru",
      title: "Director, Technology Services",
      img: "",
      topic: "I thought it was RCE, it was a ping",
      description:
        "Alfie Njeru is a seasoned cybersecurity professional and one of Africa's leading voices in ethical hacking. He has made notable contributions to the global bug bounty community through responsible disclosure and in-depth technical analysis of security vulnerabilities. He is the first Bugcrowd Ambassador from Africa and a HackerOne Kenya Co-Ambassador, where he actively promotes responsible hacking and mentorship across the continent. Alfie's disclosures have been acknowledged by major organizations including Microsoft, Oracle, Nokia, BBC, JP Morgan Chase, BMW, Dell, the United Nations, UN Women, Telecom Italia, Envato, Philips, Ericsson, Shopclues, Europa, Siemens, Open Bug Bounty, and others. His commitment to responsible disclosure earned him a prestigious challenge coin from the UK's National Cyber Security Centre (NCSC) — a rare honor in global vulnerability research. Beyond research, Alfie is deeply committed to knowledge sharing. He has contributed over 20 submissions to the Google Hacking Database and Exploit-DB, reviewed content for the Certificate of Cloud Security Knowledge (CCSK v5), and authored the Windows Security Auditing course. Currently serving as Director, Technology Services, he continues to lead and innovate in the cybersecurity landscape.",
    },

    /*    {
      name: "John Ombagi Nyabuti",
      title: "Founder and Principal Consultant at NCT | OSCE",
      img: "",
      topic: "TBD",
      description: "TBD",
    },
    {
      name: "Tahaa Farooq",
      title: "TBD",
      img: "",
      topic: "TBD",
      description: "TBD",
    }, */
    /*
    {
      name: "Dennis Mburu",
      img: "/images/speaker2.jpeg",
      description: "",
    },
    {
      name: "John Kuria",
      img: "/images/speaker3.jpeg",
      description: "",
    },
    {
      name: "Moses Mrima Mbanga",
      img: "/images/speaker4.jpeg",
      description: "",
    },
    {
      name: "Cephas Okoth",
      img: "/images/speaker5.jpeg",
      description: "",
    },
    {
      name: "Dennis Kori Gichuki",
      img: "/images/speaker6.jpeg",
      description: "",
    },
    {
      name: "Alvin Mwambi",
      img: "/images/speaker7.jpeg",
      description: "",
    },
    */
  ];

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
              sec: "Date: June 7th 2025",
              ter: "Location: Michael Joseph Centre, Nairobi",
            },
            tertiary: "",
          }}
        />
        <AboutSection />
        <SpeakersSectionRedesign speakers={speakers} />
        {/*<EventSection />
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
