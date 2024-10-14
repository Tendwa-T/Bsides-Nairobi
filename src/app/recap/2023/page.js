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
export default function Recap2023() {
  const speakers = [
    {
      name: "Jones Barza",
      role: "Host",
      description:
        "Software & Cybersecurity Engineer, Founder Swift Intellect Limited & CyberSpace Kenya",
      img: "/images/2022/speakers/JonesBar.jpg",
    },
    {
      name: "Joylynn Kirui",
      role: "Speaker",
      description:
        "Senior Cloud Security Advocate at Microsoft,Infosec evangelist who believes in empowering developers and users in general on security best practices. She has vast experience in web and mobile app security testing, DevSecOps and GSM security having previously worked in the telco industry.",
      img: "/images/2022/speakers/JoyleneKir.jpg",
    },
    {
      name: "Ellan Wambugu",
      role: "Speaker",
      description:
        "Software developer and a Red Team enthusiast focusing on cloud security and malware analysis. When he is not focusing on cybersecurity or building a product, you'd probably find him swimming somewhere",
      img: "/images/2022/speakers/EllanWam.jpg",
    },
    {
      name: "Sabrina Barongo",
      role: "Speaker",
      description:
        "Senior officer - Cyber Security assurance at Safaricom PLC,focused on vulnerability assessments,penetration testing and red team exercises. vulnerabilities.",
      img: "/images/2022/speakers/SabrinaBar.jpg",
    },
    {
      name: "Deborah Robia",
      role: "Speaker",
      description:
        "Deborah is Cybersecurity, Privacy, and Trusted Technologies Senior Consultant at EY with a focus on Vulnerability and Threat Management. I am passionate about data privacy and protection; and, have conducted data privacy gap assessments and data flow mapping for local and multinational clients",
      img: "/images/2022/speakers/DeborahRob.jpeg",
    },
    {
      name: "Amarjit Labhuram",
      role: "Speaker",
      description:
        "Penetration tester/red teamer specializing on Windows systems.",
      img: "/images/2022/speakers/AmarjitLab.jpg",
    },
    {
      name: "Malusi Faith",
      role: "Panelist",
      description:
        "Malusi is a certified information security researcher and practitioner with over three years experience. She has expertise in pentesting, cloud security and DevOps. When she's not working, she enjoys CTFs, jigsaw puzzles and Scrabble.",
      img: "/images/2022/speakers/MalusiFai.jpg",
    },
    {
      name: "Michael Mathenge",
      role: "Speaker",
      description:
        "Cyber security consultant and researcher with a bias toward cryptography",
      img: "/images/2022/speakers/MichaelMat.jpg",
    },
    {
      name: "Sean Wesonga",
      role: "Keynote Speaker",
      description:
        "Sean is a Senior Product Manager for the Azure security Engineering team in Microsoft focused on the Customer Experience Engineering process covering regions North America , EMEA and APAC. Sean has a bachelor’s degree in Computer Science with a specialism for Computer security where he Graduated with honors from Staffordshire University. The Role involves a deal of collaboration by integrating and working with different teams ranging from customers , Partners to Microsoft Field and Engineering teams with the aim of enhancing adoption , feature feedback and engineering improvements of the Cybersecurity focus solutions",
      img: "/images/2022/speakers/SeanWes.jpg",
    },
    {
      name: "Charles Muthii",
      role: "Speaker",
      description:
        "Charles is an offensive Security Consultant at Silensec. Passionate about security research, mobile & browser exploitation, arm assembly, and reverse engineering.",
      img: "/images/2022/speakers/CharlesMut.jpg",
    },
    {
      name: "Eve Kilel",
      role: "Panelist",
      description:
        "Eve is Program Manager, Cloud Security - CxE at Microsoft. She is passionate about and knowledgeable on web, network and application security, software development (Web Applications), penetration testing and business intelligence.",
      img: "/images/2022/speakers/EvelynKel.jpg",
    },
    {
      name: "Trevor Saudi",
      role: "Speaker",
      description:
        "Security Consultant at Silensec. Passionate about programming, web security and reverse engineering.",
      img: "/images/2022/speakers/TrevorSau.jpeg",
    },
    {
      name: "Christine Wambiru",
      role: "Panelist",
      description:
        "Christine Wambiru is an information security analyst, a role she enjoys and entails carrying out responsibilities such as Incident response, memory forensics and threat intelligence. She is also a Content Manager at Shehacks KE where she ensures the development of relevant and timely content for the community. She enjoys sharing knowledge with the community through article writing and traveling during her free time",
      img: "/images/2022/speakers/ChristineWam.jpeg",
    },
    {
      name: "Chrispus Kamau",
      role: "Panelist",
      description:
        "CK is the director of e.KRAAL Innovation Hub. He has multiple years of experience in cybersecurity with a major focus on R&D and building capacity.",
      img: "/images/2022/speakers/ChrispusKam.jpg",
    },
    {
      name: "Brian Nyali",
      role: "Panelist",
      description:
        "Brian is a Principle Risk Consultant | DFIR Lead at Serianu. He is a former managed security services Senior Information Security Analyst with a background in Digital Forensics, Incident Response, Threat Hunting, SOC Operations and System Administration. Professional certifications: CHFI | ECSA | CEH | ECIH",
      img: "/images/2022/speakers/BrianNya.jfif",
    },
    {
      name: "Gabriel Mathenge",
      role: "Speaker",
      description:
        "Gabriel cybersecurity enthusiast with 7+ years of experience in security consulting and engineering across various industries. My areas of specialization include; penetration testing/red team engagements, social engineering assessments and security training.",
      img: "/images/2022/speakers/GabrielMat.png",
    },
    {
      name: "Martha Nyawira",
      role: "Panelist",
      description:
        "Martha Nyawira is a red teamer, pentester, trainer and mentor. She has expertise in DevSecOps and cloud security. She relishes traveling, cooking and spending quality time with friends and family.",
      img: "/images/2022/speakers/MarthaNya.png",
    },
    {
      name: "Saruni Maina",
      role: "Speaker",
      description:
        "Saruni is a developer relations executive at Chipper Cash. He is passionate about creating products and services that seamlessly adapt to consumers' lives.",
      img: "/images/2022/speakers/SaruniMai.jfif",
    },
    {
      name: "Andrew Alston",
      role: "Key Speaker",
      description:
        "Andrew is the CTO of Liquid Labs, the research and development arm of Liquid Telecommunications. Aside from the heavy focus on routing technologies, Andrew writes code (primarily in C, Golang and Assembler), primarily revolving around the testing and implementation of routing technologies as part of the R&D efforts into the latest technologies. Andrew is also an Area Routing Director.",
      img: "/images/2022/speakers/AndrewAls.png",
    },
    {
      name: "Lawrence Muchilwa",
      role: "Speaker",
      description:
        "Cybersecurity engineering manager with focus on cyber defend and prevent operations. He leads a cyber security operations center and researches on threat intelligence and forensics.",
      img: "/images/2022/speakers/LawrenceMuc.webp",
    },
    {
      name: "Anthony Mutiga",
      role: "Speaker",
      description: "Information Security Consultant",
      img: "/images/2022/speakers/AnthonyMut.jpeg",
    },
    {
      name: "Silvia Kiragu",
      role: "Panelist",
      description:
        "Silvia Kiragu is a Cybersecurity Researcher and Trainer with a keen interest in OSINT and OPSEC. She is an alumnus of the National Cybersecurity Training Program Cohort 1 and the 6th edition of the Kenya School of Internet Governance. She is also a trainer at e.KRAAL Innovation Hub and Shehacks KE. Silvia is a content creator and curriculum developer in Cybersecurity. She hosts a podcast known as Let's talk cyber.",
      img: "/images/2022/speakers/SilviaKir.jpg",
    },
    {
      name: "Fred Wahome",
      role: "Panelist",
      description:
        "Fred is the CEO of Secunets Technologies Ltd and Vice Chair Kenya CyberSecurity & Forensics Association (KCSFA).",
      img: "/images/2022/speakers/FredWah.jpeg",
    },
    {
      name: "David Wambia",
      role: "Trend Micro Representative",
      description: "David is an associate system engineer at Trend Micro.",
      img: "/images/2022/speakers/DavidWam.jpeg",
    },
    {
      name: "Communication Authority Representative",
      role: "Speaker",
      description:
        "The Communications Authority of Kenya is the regulatory Authority for the ICT industry in Kenya with responsibilities in telecommunications, e-commerce, broadcasting and postal/courier services. The national KE-CIRT/CC is Kenya’s national cybersecurity trusted point of contact and is mandated with offering advice on cybersecurity matters nationally and coordinating response to cyber incidents in collaboration with relevant stakeholders locally, regionally and globally.",
      img: "/images/2022/speakers/CAKRep.png",
    },
    {
      name: "National Cyber Command Center Representative",
      role: "Speaker",
      description:
        "The NC4’s mandate is to ensure safe cyberspace for the Kenyan Government and its citizens. NC4 provides strategic guidance and advisory to both the public and private sectors in order to strengthen the security, resilience and workforce of the cyberspace to protect National Critical Information Infrastructure (CII) and Kenyan citizens.",
      img: "/images/2022/speakers/NC3Rep.png",
    },
    {
      name: "Kenya Defence Forces Representative",
      role: "Speaker",
      description:
        "The KDFs mission is to defend and protect the sovereignty and territorial integrity of the Republic, assist and cooperate with other authorities in situations of emergency or disaster and restore peace in any part of Kenya affected by unrest or instability as assigned. The Ministry of Defence is comprised of the Kenya Army, the Kenya Air Force, the Kenya Navy, the Defence Forces Constabulary and the Civilian Staff.",
      img: "/images/2022/speakers/KDFRep.jpg",
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
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </Box>
      <DonateSection />
      <PartnerSection />
      <ImageMarquee />
      <FooterSection />
    </Box>
  );
}
