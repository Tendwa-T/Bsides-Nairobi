import {
  Box,
  Typography,
  Grid2,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

export default function RecapCard({ data }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
      }}
    >
      <Grid2 container spacing={2} padding={2} rowSpacing={2} columnSpacing={2}>
        {data.map((sp, index) => (
          <Grid2 key={index} size="auto">
            <Card sx={{ width: "18em" }}>
              <img
                src={sp.img}
                width={550}
                height={"100em"}
                alt="Speaker Poster"
              />
              <CardContent sx={{ height: 100, overflowY: "scroll" }}>
                <Typography variant="h6">{sp.name}</Typography>
                <Typography variant="caption" gutterBottom sx={{ mb: "10em" }}>
                  {sp.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
