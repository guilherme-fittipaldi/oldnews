import { Typography, Card, CardMedia } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

function News() {
  return (
    <Grid2
      container
      display="flex"
      direction="column"
      alignItems="center"
    >
      <Grid2>
        <Typography variant="h4" component="h1">Notícia</Typography>
      </Grid2>
      <Grid2>
        <Card
          sx={{
            display: "flex",
            alignItems: "start",
            boxShadow: 0,
            backgroundColor: "transparent",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "900px" }}
            height="500"
            image="https://cdn.britannica.com/04/5104-004-51F5F120/Flag-Antigua-and-Barbuda.jpg?w=400&h=200&c=crop"
            alt="Antigua and Barbuda achieved independence from the United Kingdom"
          />
        </Card>
      </Grid2>
    </Grid2>
  );
}

export default News;
