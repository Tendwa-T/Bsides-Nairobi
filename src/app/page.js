import LandingSection from "./components/landingSection";
import NavBarComponent from "./components/navbar";
import AboutSection from "./components/aboutSection";
import FooterSection from "./components/footerSection";
import { Box } from "@mui/material";
import EventSection from "./components/eventSection";
import ImageMarquee from "./components/images";
import GetTicketesSection from "./components/tickets";
import DonateSection from "./components/donate";
import PartnerSection from "./components/partners";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      <NavBarComponent
        navItems={[
          { title: "Home", route: "/", sectionID: "" },
          { title: "About", route: "/", sectionID: "about" },
          { title: "Events", route: "/", sectionID: "event" },
        ]}
      />
      <LandingSection
        image={"url(/images/nairobi.jpg)"}
        eventData={{
          main: "Theme: New Frontiers",
          secondary: "5th - 8th November 2024",
          tertiary: "United States International University - Africa",
        }}
      />
      <AboutSection />
      <EventSection />
      <GetTicketesSection />
      <DonateSection />
      <PartnerSection />
      <ImageMarquee />
      <FooterSection />
    </Box>
  );
}
