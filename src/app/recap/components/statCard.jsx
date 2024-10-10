import {
  Code,
  Diversity1,
  Diversity3,
  Groups,
  MicExternalOn,
  PersonAddTwoTone,
} from "@mui/icons-material";
import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";

export default function StatSection() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#424643",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          textAlign={"center"}
          variant="h2"
          fontWeight="100"
          sx={{ fontSize: "3em", pt: "1em" }}
        >
          Stats about the event
        </Typography>
        <Grid2
          container
          spacing={5}
          padding={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid2
            size="auto"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Card
              sx={{
                height: "15em",
                width: { xs: "15em", sm: "20em" },
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "baseline",
                bgcolor: "#858c85",
                borderRadius: "2em",
              }}
              className="bg-gradient-to-bl from-green-500 to-[#858c85]"
            >
              <CardContent sx={{ color: "white", width: "100%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "1.4em" }}
                  textAlign={"center"}
                >
                  Challenge Creators
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "2em" }}
                  textAlign={"center"}
                >
                  9
                </Typography>
              </CardContent>
              <Box
                sx={{
                  p: "2em",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "gray",
                    p: "1em",
                    borderRadius: "100%",
                  }}
                >
                  <PersonAddTwoTone sx={{ fontSize: "2em", color: "white" }} />
                </Box>
              </Box>
            </Card>
          </Grid2>
          <Grid2
            size="auto"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Card
              sx={{
                height: "15em",
                width: { xs: "15em", sm: "20em" },
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "baseline",
                bgcolor: "#858c85",
                borderRadius: "2em",
              }}
              className="bg-gradient-to-bl from-red-500 to-[#858c85]"
            >
              <CardContent sx={{ color: "white", width: "100%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "1.4em" }}
                  textAlign={"center"}
                >
                  Attendees
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "2em" }}
                  textAlign={"center"}
                >
                  150
                </Typography>
              </CardContent>
              <Box
                sx={{
                  p: "2em",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "gray",
                    p: "1em",
                    borderRadius: "100%",
                  }}
                >
                  <Diversity1 sx={{ fontSize: "2em", color: "white" }} />
                </Box>
              </Box>
            </Card>
          </Grid2>
          <Grid2
            size="auto"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Card
              sx={{
                height: "15em",
                width: { xs: "15em", sm: "20em" },
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "baseline",
                bgcolor: "#858c85",
                borderRadius: "2em",
              }}
              className="bg-gradient-to-bl from-cyan-600 to-[#858c85]"
            >
              <CardContent sx={{ color: "white", width: "100%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "1.4em" }}
                  textAlign={"center"}
                >
                  Participants
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "2em" }}
                  textAlign={"center"}
                >
                  125
                </Typography>
              </CardContent>
              <Box
                sx={{
                  p: "2em",
                  color: "white",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "gray",
                    p: "1em",
                    borderRadius: "100%",
                  }}
                >
                  <Diversity3 sx={{ fontSize: "2em", color: "white" }} />
                </Box>
              </Box>
            </Card>
          </Grid2>
          <Grid2
            size="auto"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Card
              sx={{
                height: "15em",
                width: { xs: "15em", sm: "20em" },
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "baseline",
                bgcolor: "#858c85",
                borderRadius: "2em",
              }}
              className="bg-gradient-to-bl from-blue-600 to-[#858c85]"
            >
              <CardContent sx={{ color: "white", width: "100%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "1.4em" }}
                  textAlign={"center"}
                >
                  Teams
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "2em" }}
                  textAlign={"center"}
                >
                  25
                </Typography>
              </CardContent>
              <Box
                sx={{
                  p: "2em",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "gray",
                    p: "1em",
                    borderRadius: "100%",
                  }}
                >
                  <Groups sx={{ fontSize: "2em", color: "white" }} />
                </Box>
              </Box>
            </Card>
          </Grid2>
          <Grid2
            size="auto"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Card
              sx={{
                height: "15em",
                width: { xs: "15em", sm: "20em" },
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "baseline",
                bgcolor: "#858c85",
                borderRadius: "2em",
              }}
              className="bg-gradient-to-bl from-yellow-600 to-[#858c85]"
            >
              <CardContent sx={{ color: "white", width: "100%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "1.4em" }}
                  textAlign={"center"}
                >
                  Speakers
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "2em" }}
                  textAlign={"center"}
                >
                  30
                </Typography>
              </CardContent>
              <Box
                sx={{
                  p: "2em",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "gray",
                    p: "1em",
                    borderRadius: "100%",
                  }}
                >
                  <MicExternalOn sx={{ fontSize: "2em", color: "white" }} />
                </Box>
              </Box>
            </Card>
          </Grid2>
          <Grid2
            size="auto"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Card
              sx={{
                height: "15em",
                width: { xs: "15em", sm: "20em" },
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "baseline",
                bgcolor: "#858c85",
                borderRadius: "2em",
              }}
              className="bg-gradient-to-bl from-purple-500 to-[#858c85]"
            >
              <CardContent sx={{ color: "white", width: "100%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "1.5em" }}
                  textAlign={"center"}
                >
                  Sessions
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "2em" }}
                  textAlign={"center"}
                >
                  16
                </Typography>
              </CardContent>
              <Box
                sx={{
                  p: "2em",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "gray",
                    p: "1em",
                    borderRadius: "100%",
                  }}
                >
                  <Code sx={{ fontSize: "2em", color: "white" }} />
                </Box>
              </Box>
            </Card>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
