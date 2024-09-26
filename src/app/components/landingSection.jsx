import { Box, Typography, Slide, Fade } from "@mui/material";

export default function LandingSection({ image, textData }) {
  //"url(/images/nairobi.jpg)"
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `${image}`,
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
            "linear-gradient(to right, rgb(0, 0, 0, 0.85), rgba(0,0,0,0.85))",
          zIndex: 1,
        },
      }}
    >
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
            top: { xs: "3vh", sm: "5vh", md: "15vh" },
            zIndex: 1,
          }}
        />
      </Slide>
      {textData ? (
        <Fade
          in={true}
          timeout={{ enter: 800 }}
          style={{ transitionDelay: 500 }}
        >
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
              {textData.main}
            </Typography>
            <Box sx={{ height: "2em" }} />
            <Typography
              variant="h4"
              fontWeight={"bold"}
              textAlign={"center"}
              sx={{ color: "#fff", zIndex: 2, fontSize: "2.5em" }}
            >
              {textData.secondary}
            </Typography>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              textAlign={"center"}
              sx={{ color: "#a3a3a3", zIndex: 2, fontSize: "2em" }}
            >
              {textData.tertiary}
            </Typography>
          </Box>
        </Fade>
      ) : (
        <Fade
          in={true}
          timeout={{ enter: 800 }}
          style={{ transitionDelay: 500 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100vw",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              position: "absolute",
              bottom: "8vh",
              zIndex: 2,
            }}
          >
            <img src="/Recap.svg" width={300} height={200} />
          </Box>
        </Fade>
      )}
    </Box>
  );
}
