import { Box, Typography } from "@mui/material";
import LandingSection from "./components/landingSection";
import NavBarComponent from "./components/navbar";
import AboutSection from "./components/aboutSection";

export default function Home() {
  return (
    <>
      <NavBarComponent navItems={["Home", "About", "Events", "Contact"]} />
      <LandingSection />
      <AboutSection />
    </>
  );
}
