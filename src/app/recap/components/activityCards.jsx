import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";

export default function ActivityCards() {
  const activities = [
    {
      key: 0,
      image: "/images/2022/challenges/activeDirectory.webp",
      title: "Active Directory",
      description:
        "Focuses on securing, managing, and exploiting vulnerabilities in Active Directory environments, including user authentication, group policy, and network permissions.",
    },
    {
      key: 1,
      image: "/images/2022/challenges/digitalForensics.jpeg",
      title: "Digital Forensics",
      description:
        "Involves the recovery and analysis of digital evidence from various devices, focusing on tracing cyberattacks, data breaches, or other digital crimes.",
    },
    {
      key: 2,
      image: "/images/2022/challenges/GRC.jpeg",
      title: "Governance, Risk and Compliance",
      description:
        "Centers on ensuring that organizations meet legal and regulatory requirements while managing risks and maintaining internal security standards and policies.",
    },
    {
      key: 3,
      image: "/images/2022/challenges/webAppCompliance.jpeg",
      title: "Web Application Compliance",
      description:
        "Involves identifying and exploiting vulnerabilities in web applications, such as SQL injection, cross-site scripting (XSS), and other common security flaws.",
    },
    {
      key: 4,
      image: "/images/2022/challenges/IR.jpeg",
      title: "Incident Response",
      description:
        "Focuses on detecting, responding to, and mitigating the effects of cyberattacks or security breaches to minimize damage and ensure swift recovery.",
    },
    {
      key: 5,
      image: "/images/2022/challenges/physicalSec.jpeg",
      title: "Physical Security",
      description:
        "Involves securing physical environments through access controls, surveillance, and threat detection to prevent unauthorized physical access to critical infrastructure or assets.",
    },
  ];

  return (
    <Box
      component={"section"}
      id="activity"
      // ref={elementRef}
      sx={{
        display: "flex",
        width: "100vw",
        pt: "3em",
        flexDirection: "column",
        bgcolor: "white",
        pb: { xs: "1em", md: "2em" },
      }}
    >
      {/* <Typography */}
      {/*   variant="h2" */}
      {/*   textAlign={"center"} */}
      {/*   fontWeight={"100"} */}
      {/*   fontSize={"3em"} */}
      {/* > */}
      {/*   Challenge Categories */}
      {/* </Typography> */}
      <Grid2
        container
        spacing={4}
        padding={4}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexGrow: 1,
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {activities.map((act) => (
          <Grid2 size="auto" key={act.key}>
            <Card
              sx={{
                width: { xs: "18em", md: "25em" },
                height: { xs: "18em", md: "25em" },
                my: "1em",
                borderRadius: "2em",
              }}
            >
              <CardMedia
                component={"img"}
                src={act.image}
                sx={{ height: "12em" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {act.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    textOverflow: "ellipsis",
                    maxHeight: "12em",
                    fontSize: { sm: "1em", md: "1.2em" },
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {act.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
