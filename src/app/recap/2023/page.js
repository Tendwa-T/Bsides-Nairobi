import DonateSection from "@/app/components/donate";
import FooterSection from "@/app/components/footerSection";
import LandingSection from "@/app/components/landingSection";
import NavBarComponent from "@/app/components/navbar";
import PartnerSection from "@/app/components/partners";
import { Box, Typography } from "@mui/material";
import RecapReports from "../components/reportSection";
import RecapEventSection from "../components/eventComponent";
import ImageMarquee from "@/app/components/images";
export default function Recap2023() {
  return (
    <Box
      sx={{
        width: "100vw",
      }}
    >
      <NavBarComponent
        navItems={[
          { title: "Home", route: "/recap/2023", sectionID: "" },
          { title: "Event", route: "/recap/2023", sectionID: "event" },
          // { title: "Report", route: "/recap/2023", sectionID: "report" },
        ]}
      />
      <LandingSection
        image={"url(/images/2023/groupPhoto.jpeg)"}
        recapData={{
          img: "/2023Recap.svg",
        }}
      />
      <RecapEventSection
        eventData={{
          title: "BSides Conference 2023",
          theme: "Data Breaches",
          textData:
            "In recent years there has been a rise in data breaches affecting organizations across various industries and continents and Kenya is no exception. Data breaches have far-reaching consequences, undermining trust and privacy and exposing sensitive information to malicious actors.\n\n Data breaches continue to present a challenge to organizations. How do you prevent one? What do you do in the event a data breach occurs? What steps do you take in order to successfully recover? All these are questions that linger when we see headlines of breaches.\n\n This year's conference was aimed at having these conversations, sharing knowledge and creating a collaborative environment for discussing best practices on preparedness and handling of data breaches.",
          eventPoster: "/images/2023/eventPoster.png",
        }}
      />
      {/*   <RecapReports
        reportData={{
          year: "2023",
          doc: "",
        }}
      /> */}
      <DonateSection />
      <PartnerSection />
      <ImageMarquee />
      <FooterSection />
    </Box>
  );
}
