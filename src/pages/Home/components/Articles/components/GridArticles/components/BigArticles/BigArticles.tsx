import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

type Article = {
  title: string;
  year: string;
  img: string;
};

type BigArticlesProps = {
  articles: Article[];
};

const BigArticles = ({ articles }: BigArticlesProps) => {
  return (
    <Grid2 container columnSpacing={4}>
      {articles.map((item) => {
        return (
          <Grid2 xs={6}>
            <Card sx={{ boxShadow: 0, backgroundColor: "transparent" }}>
              <CardActionArea sx={{ overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.img}
                  alt={item.title}
                  sx={{
                    borderRadius: "6px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition:
                      "transform 0.2s ease-in-out 0s, filter 0.2s ease-in-out 0s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    objectFit: "cover",
                  }}
                />
              </CardActionArea>
              <CardContent sx={{ px: 0 }}>
                <Chip
                  label={item.year}
                  sx={{
                    backgroundColor: "#fdd32d",
                    fontWeight: "bold",
                  }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ mt: 1, fontWeight: "bold" }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        );
      })}
    </Grid2>
  );
};

export default BigArticles;
