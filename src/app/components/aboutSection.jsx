"use client";

import { Box, Button, Link, Typography } from "@mui/material";

export default function AboutSection() {
  return (
    <Box
      id="about"
      component={"section"}
      sx={{
        display: "flex",
        flexGrow: 1,
        pt: "2.5em",
        px: { xs: "1em", sm: "2em", lg: "4em" },
        justifyContent: "center",
        mt: '2em'
      }}
    >

      <Box
        sx={{
          display: "flex",
          width: "100vw",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', sm: "flex" },
            flexGrow: 1,
            justifyContent: "center",
            justifySelf: "center",
            width: { xs: '100vw', md: '50vw' },
            mb: { xs: '2em', md: 0 }
          }}
        >
          <img
            src="/BsidesLogoAlt.webp"
            style={{
              width: '45vw',
              maxWidth: '600px',
              height: 'auto',
              maxHeight: '60vw',
              boxShadow: '3px 3px 10px rgba(0,0,0,0.3)',
            }}
            alt="Bsides Logo Alternative"
          />
        </Box>


        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100vw', md: '50vw' },
            pl: { xs: "1em", lg: "2em" }
          }}
        >
          <Typography
            variant="h2"
            textAlign={{ xs: "center", md: "left" }}
            fontWeight={"normal"}
            fontSize={"2em"}
            sx={{ textDecoration: "underline", textUnderlineOffset: '0.2em' }}
          >
            About BSides Nairobi
          </Typography>
          <Box sx={{ height: "2em" }} />
          <Box
            sx={{ border: '1em', mr: { xs: '1em', md: '1em' } }}
          >
            <Typography
              variant="body1"
              textAlign={"start"}
              sx={{ fontSize: { xs: "1em", sm: '1.3em' } }}
            >
              Security BSides is a non-profit, community-driven, event built for
              and by members of the information security community. This creates
              opportunities for individuals to both present and participate in an
              intimate atmosphere that encourages innovation, inclusivity,
              networking and collaboration. Our aim is to help develop the
              Information Security community in Kenya. If you would like to learn
              more or get involved, please email{" "}
              <Link
                href="mailto:info@bsidesnairobi.ke"
                target="_blank"
                rel="noopener"
              >
                info@bsidesnairobi.ke
              </Link>
            </Typography>

          </Box>

        </Box>
        <Box sx={{ height: "2em" }} />
      </Box>
    </Box >
  );
}
