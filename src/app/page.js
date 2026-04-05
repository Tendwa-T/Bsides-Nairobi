"use client";

import LandingSection from "./components/landingSection";
import NavBarComponent from "./components/navbar";
import AboutSection from "./components/aboutSection";
import FooterSection from "./components/footerSection";
import {
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	Typography,
} from "@mui/material";
/* import EventSection from "./components/eventSection";
import GetTicketesSection from "./components/tickets";
import DonateSection from "./components/donate";
import SpeakersSection from "./components/speakers";
import CTFSection from "./components/ctf";
import ProgSection from "./components/programSection"; */
import { useEffect, useState } from "react";
import PartnerSection from "./components/partners";
import { Close } from "@mui/icons-material";
import SpeakersSectionRedesign from "./components/speakersRedesign";
import ImageMarquee from "./components/images";

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
			topic: "The Triager's Tightrope: Balancing Speed, Accuracy, and Collaboration in Bug Bounty Programs",
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
			name: "Jones Baraza",
			title: "Global Award Winner | Digital Security Specialist | CSO & HRD Protection | Anti-Surveillance Research | Secure Tech Advocacy | Africa Focus",
			img: "/images/2025/speakers/JonesBaraza.jpg",
			topic: "Bug Bounty: Addressing the Hurdles of Vulnerability Disclosure in Kenya's Digital Economy",
			description:
				"Jones Baraza is a digital security leader and senior engineer with over a decade of experience in offensive and defensive security, DevSecOps, and risk management. He has a proven track record in architecting secure systems, leading red team programs, and developing open-source solutions. Jones is also the Co-founder & CTO of CTFROOM, a pioneering cyber range platform revolutionizing security training through gamified challenges",
		},
		{
			name: "Lawrence Muchilwa",
			title: "FIRST Africa Regional National CSIRTs | Cybersecurity Policy & Governance Specialist | Building Africa Incident Response Communities",
			img: "/images/2022/speakers/LawrenceMuc.webp",
			topic: "Bug Bounty: Addressing the Hurdles of Vulnerability Disclosure in Kenya's Digital Economy",
			description:
				"Lawrence Muchilwa is a seasoned cybersecurity professional and regional cyber diplomat with over a decade of experience in security operations, digital forensics, and incident response. As the African Regional Liaison for the Forum of Incident Response and Security Teams (FIRST) and a Fellow at the Africa Cyber Defense Forum (ACDF), he plays a pivotal role in strengthening cross-border collaboration on cyber threat intelligence and incident coordination. Lawrence has worked closely with national CSIRTs across Africa, providing technical capacity-building and strategic guidance informed by real-world challenges. With a strong academic background—including a PhD in progress and a Master’s in Information Systems Technology—he bridges the gap between technical expertise and policy engagement, fostering resilient cybersecurity ecosystems across East Africa.",
		},
		{
			name: "Enoch Mahila",
			title: "Bug Bounty Hunter",
			img: "/images/2025/speakers/EnochMahila.jpg",
			topic: "Getting Started With Bug Hunting",
			description:
				"My name is Enoch Mahila (Mailler) and I am excited to share with you on breaking into bug hunting. We will focus on the core aspects to keep in mind especially when beginning your journey, which kind of bugs are suited for beginners and the need for balancing learning and improving your skill set.",
		},
		{
			name: "Pharace Moraa",
			title: "Senior Manager, Cyber Secure by Design",
			img: "",
			gender: "female",
			topic: "Hack with Impact: Understanding and Contributing to Safaricom's Bug Bounty Program",
			description:
				"Pharace leads key cybersecurity initiatives at Safaricom including the company's bug bounty program hosted on Bug Crowd. She is passionate about ethical hacking, secure development, and fostering collaboration between organizations and the security researcher community. This session explores how Safaricom leverages its bug bounty program on bug crowd to strengthen its cybersecurity posture through ethical hacking. Discover how the program works, how to participate, what qualifies for rewards, and how we're building a responsive and collaborative researcher experience.",
		},
		{
			name: "Alfred Magara",
			title: "Director, Technology Services",
			img: "",
			gender: "Male",
			topic: "I thought it was RCE, it was a ping",
			description: `Alfie Njeru is a seasoned cybersecurity professional and one of Africa's leading voices in ethical hacking. He has made notable contributions to the global bug bounty community through responsible disclosure and in-depth technical analysis of security vulnerabilities.
He is the first Bugcrowd Ambassador from Africa and a HackerOne Kenya Co-Ambassador, where he actively promotes responsible hacking and mentorship across the continent.
Alfie's disclosures have been acknowledged by major organizations including Microsoft, Oracle, Nokia, BBC, JP Morgan Chase, BMW, Dell, the United Nations, UN Women, Telecom Italia, Envato, Philips, Ericsson, Shopclues, Europa, Siemens, Open Bug Bounty, and others. His commitment to responsible disclosure earned him a prestigious challenge coin from the UK’s National Cyber Security Centre (NCSC) — a rare honor in global vulnerability research.
Beyond research, Alfie is deeply committed to knowledge sharing. He has contributed over 20 submissions to the Google Hacking Database and Exploit-DB, reviewed content for the Certificate of Cloud Security Knowledge (CCSK v5), and authored the Windows Security Auditing course.
Currently serving as Director, Technology Services he continues to lead and innovate in the cybersecurity landscape.
`,
		},
		/*  {
      name: "Trey Daley",
      title: "Senior Manager, Cyber Secure by Design",
      img: "",
      gender: "male",
      topic:
        "Hack with Impact: Understanding and Contributing to Safaricom's Bug Bounty Program",
      description:
        "Pharace leads key cybersecurity initiatives at Safaricom including the company's bug bounty program hosted on Bug Crowd. She is passionate about ethical hacking, secure development, and fostering collaboration between organizations and the security researcher community. This session explores how Safaricom leverages its bug bounty program on bug crowd to strengthen its cybersecurity posture through ethical hacking. Discover how the program works, how to participate, what qualifies for rewards, and how we're building a responsive and collaborative researcher experience.",
    }, */
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
						<Typography
							textAlign={"center"}
							fontWeight={"bold"}
							variant="h5"
						>
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
								alt="Ticket Modal"
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
								To our partners, friends, and attendees—thank
								you for making the BSides 2024 conference a
								success. We couldn&apos;t have done it without
								you!
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

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "100vw",
				}}
			>
				<NavBarComponent
					navItems={[
						{ title: "Home", route: "/", sectionID: "" },
						{ title: "About", route: "/", sectionID: "about" },
					]}
				/>
				<LandingSection
					image={"url(/images/nairobi.jpg)"}
					// Event Data Goes here
					/*           eventData={{
            main: "BSIDES NAIROBI 2025",
            secondary: {
              title: "Building Cyber resilience through Assurance and Response",
              date: "09:00 AM, Dec 10, 2025",
              location: "",
              description:
                "BSides Nairobi 2025 comes at a critical moment to bring together cybersecurity professionals, policymakers, researchers, and innovators with one goal: strengthening Kenya’s cyber resilience. Guided by the principle “It’s not if, but when you are hacked,” this year’s edition focuses on reducing the attack surface through proactive cyber assurance",
            },
            tertiary: "",
          }} */
				/>
				<AboutSection />
				{/* <SpeakersSectionRedesign speakers={speakers} /> */}
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
