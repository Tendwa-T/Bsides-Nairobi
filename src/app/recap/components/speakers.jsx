import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";

export default function SpeakersComponent({ data }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid2 container spacing={2} padding={2} rowSpacing={2} columnSpacing={2}>
        {data.map((sp, index) => (
          <Grid2 key={index} size="auto">
            <Card sx={{ width: "18em" }}>
              <CardMedia image={sp.img} sx={{ height: "20em" }} />
              <CardContent sx={{ height: 200, overflowY: "scroll" }}>
                <Typography variant="h5">{sp.name}</Typography>
                <Typography variant="caption" gutterBottom sx={{ mb: "10em" }}>
                  {sp.role}
                </Typography>
                {sp.description != "" ? (
                  <Typography
                    variant="body1"
                    sx={{ overflowY: "scroll", height: "6em" }}
                    textOverflow={"ellipsis"}
                  >
                    {sp.description}
                  </Typography>
                ) : null}
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
