import AboutSection from "@/app/components/aboutSection";
import DonateSection from "@/app/components/donate";
import FooterSection from "@/app/components/footerSection";
import LandingSection from "@/app/components/landingSection";
import NavBarComponent from "@/app/components/navbar";
import PartnerSection from "@/app/components/partners";
import { Box, Typography } from "@mui/material";
import ActivityCards from "../components/activityCards";

export default function Recap2022() {
  return (
    <Box sx={{ width: "100vw" }}>
      <NavBarComponent
        navItems={[
          { title: "Home", route: "/", sectionID: "" },
          { title: "About", route: "/#about", sectionID: "about" },
          { title: "Report", route: "/#report", sectionID: "report" },
        ]}
      />
      <LandingSection image={"url(/images/2022/groupPhoto.jpeg)"} />
      <AboutSection />
      <ActivityCards />
      <DonateSection />
      <PartnerSection />
      <FooterSection />
    </Box>
  );
}
