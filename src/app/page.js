import LandingSection from "./components/landingSection";
import NavBarComponent from "./components/navbar";
import AboutSection from "./components/aboutSection";
import FooterSection from "./components/footerSection";
import { Box } from "@mui/material";
import EventSection from "./components/eventSection";
import ImageMarquee from "./components/images";
import CallForPapersSection from "./components/cfps";
import GetTicketesSection from "./components/tickets";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      <NavBarComponent
        navItems={[
          { title: "Home", route: "/", sectionID: "" },
          { title: "About", route: "/#about", sectionID: "about" },
          { title: "Events", route: "/#event", sectionID: "event" },
        ]}
      />
      <LandingSection />
      <AboutSection />
      <EventSection />
      <CallForPapersSection />
      <GetTicketesSection />
      <ImageMarquee />
      <FooterSection />
    </Box>
  );
}
