import { Box, Typography, Slide, Fade } from "@mui/material";

export default function LandingSection() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url(/images/nairobi.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "start",
        backgroundRepeat: "no-repeat",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgb(0, 0, 0, 0.7), rgba(0,0,0, 0.7))",
          zIndex: 1,
        },
      }}
    >
      <Slide
        direction="right"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 900, exit: 300 }}
      >
        <Box
          sx={{ position: "absolute", top: "18vh", left: "15vw", zIndex: 2 }}
        >
          <Typography
            variant="h3"
            fontWeight={"bold"}
            sx={{ color: "white", fontSize: "2em" }}
          >
            Welcome to
          </Typography>
        </Box>
      </Slide>

      <Slide
        direction="left"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 900, exit: 300 }}
      >
        <Box
          sx={{
            display: "flex",
            width: "55vw",
            color: "white",
            height: "50vh",
            p: "2em",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: "url(/images/bsidesLogo.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: "18vh",
            zIndex: 1,
          }}
        />
      </Slide>
      <Fade in={true} timeout={{ enter: 800 }} style={{ transitionDelay: 500 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: "5vh",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            fontWeight={"bold"}
            textAlign={"center"}
            sx={{ color: "#fff", zIndex: 2, fontSize: "3em" }}
          >
            Theme: New Frontiers
          </Typography>
          <Box sx={{ height: "2em" }} />
          <Typography
            variant="h4"
            fontWeight={"bold"}
            textAlign={"center"}
            sx={{ color: "#fff", zIndex: 2, fontSize: "2.5em" }}
          >
            5th - 8th November 2024
          </Typography>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            textAlign={"center"}
            sx={{ color: "#8c8c8c", zIndex: 2, fontSize: "2em" }}
          >
            Location: TBD
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
}

