import DonateSection from "@/app/components/donate";
import FooterSection from "@/app/components/footerSection";
import LandingSection from "@/app/components/landingSection";
import NavBarComponent from "@/app/components/navbar";
import PartnerSection from "@/app/components/partners";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import RecapReports from "../components/reportSection";
import RecapEventSection from "../components/eventComponent";
import ImageMarquee from "@/app/components/images";
import { ArrowDropDown } from "@mui/icons-material";
import SpeakersComponent from "../components/speakers";
import RecapCard from "../components/recapCards";
export default function Recap2023() {
  const speakers = [
    {
      name: "Albertini Francis",
      role: "Speaker",
      description: "",
      img: "/images/2023/speakers/AlbertiniFra.jpeg",
    },
    {
      name: "Haniel Dennis",
      role: "Speaker",
      description: "",
      img: "/images/2023/speakers/HaneilDen.jpeg",
    },
    {
      name: "Chalie Wizz",
      role: "Speaker",
      description: "",
      img: "/images/2023/speakers/CharlieWiz.jpeg",
    },
    {
      name: "Ian Peter",
      role: "Speaker",
      description: "",
      img: "/images/2023/speakers/IanPet.jpeg",
    },
    {
      name: "Brayan Kai",
      role: "Speaker",
      description: "",
      img: "/images/2023/speakers/BrayanKai.jpeg",
    },
    {
      name: "Mrima Moses",
      role: "Speaker",
      description: "",
      img: "/images/2023/speakers/MrimaMos.jpeg",
    },
    {
      name: "Alex Munene",
      role: "Speaker",
      description: "",
      img: "/images/2023/speakers/AlexMun.jpeg",
    },
    {
      name: "Felix Masigwa",
      role: "Speaker",
      description: "",
      img: "/images/2023/speakers/FelixMas.jpeg",
    },
    {
      name: "Nancy Muriithi",
      role: "Speaker",
      description: "",
      img: "/images/2023/speakers/NancyMur.jpeg",
    },
    {
      name: "Brian Nyali",
      role: "Speaker",
      description: "",
      img: "/images/2023/speakers/BrianNya.jpeg",
    },
    {
      name: "Lawrence Muchilwa",
      role: "Speaker",
      description: "",
      img: "/images/2023/speakers/LawrenceMuc.jpeg",
    },
    {
      name: "Margaret Kamau",
      role: "Speaker",
      description: "",
      img: "/images/2023/speakers/MargaretKam.jpeg",
    },
    {
      name: "Kevin Kanyi",
      role: "Speaker",
      description: "",
      img: "/images/2023/speakers/KevinKan.jpeg",
    },
    {
      name: "Cephas Okoth",
      role: "Speaker",
      description: "",
      img: "/images/2023/speakers/CephasOko.jpeg",
    },
  ];
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
          title: "BSides Nairobi Conference 2023",
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
      <Box sx={{ p: "1em" }}>
        <Accordion sx={{ borderRadius: "1em", my: "1em" }}>
          <AccordionSummary expandIcon={<ArrowDropDown />}>
            <Typography variant="h5" fontWeight={"300"} textAlign={"center"}>
              Speakers
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RecapCard data={speakers} />
          </AccordionDetails>
        </Accordion>
      </Box>
      <DonateSection />
      <PartnerSection />
      <ImageMarquee />
      <FooterSection />
    </Box>
  );
}
