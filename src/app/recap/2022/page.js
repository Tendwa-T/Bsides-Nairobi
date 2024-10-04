import DonateSection from "@/app/components/donate";
import FooterSection from "@/app/components/footerSection";
import LandingSection from "@/app/components/landingSection";
import NavBarComponent from "@/app/components/navbar";
import PartnerSection from "@/app/components/partners";
import { Box } from "@mui/material";
import ActivityCards from "../components/activityCards";
import RecapEventSection from "../components/eventComponent";
import StatSection from "../components/statCard";
import RecapReports from "../components/reportSection";

export default function Recap2022() {
  return (
    <Box sx={{ width: "100vw" }}>
      <NavBarComponent
        navItems={[
          { title: "Home", route: "/", sectionID: "" },
          { title: "Event", route: "/recap/2022/", sectionID: "event" },
          {
            title: "Report",
            route: "/recap/2022/",
            sectionID: "report",
          },
        ]}
      />
      <LandingSection
        image={"url(/images/2022/groupPhoto.jpeg)"}
        recapData={{
          img: "/2022Recap.svg",
        }}
      />
      <RecapEventSection
        eventData={{
          title: "BSides Conference 2022",
          theme: "Redefining IT Security",
          textData:
            "Throughout history, man has been forced to take a step back and reexamine their norms. This process has resulted in improvement, innovation and civilization as we now know it. With each passing hour, society consumption of information technology increases. And with each increment, so does our responsibility as IT Security professional increase. Our theme for this conference is meant to bring into focus the need for redefining information security by taking a step back and relooking into our truths. A step back to acknowledge and celebrate what the industry has achieved. A step back to acknowledge that what worked 10 years ago, might not work today. A step back to acknowledge that we still have work to be done to make the industry more inclusive, ethical, innovative and end user-centric. It is only by looking into the past, can we correct the present and lay ground for a better future.",
          eventPoster: "/images/2022/eventPoster.png",
        }}
      />
      <ActivityCards />
      <StatSection />
      <RecapReports
        reportData={{
          year: "2022",
          doc: "/docs/recaps/BSides_2022_Recap.pdf",
        }}
      />
      <DonateSection />
      <PartnerSection />
      <FooterSection />
    </Box>
  );
}