import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ActivityCards() {
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
        px: "4em",
        pb: { xs: "1em", md: "2em" },
      }}
    >
      <Typography
        variant="h2"
        textAlign={"center"}
        fontWeight={"100"}
        fontSize={"3em"}
      >
        Our Activities for the day...
      </Typography>
      <Card sx={{ maxWidth: "22em" }}>
        <CardMedia component={"img"} src="/images/2022/challenges/GRC.jpeg" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Governance, Risk, Compliance
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            (GRC) is a framework used to ensure that an organization&apos;s
            cybersecurity practices align with its overall business objectives,
            legal requirements, and industry standards.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
