import React from "react";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { ArticlesModel } from "../../../../../../../../entities/articles/articles";
import { useNavigate } from "react-router-dom";

type BigArticlesProps = {
  articles: ArticlesModel[];
};

const BigArticles = ({ articles }: BigArticlesProps) => {
  const navigate = useNavigate();
  return (
    <Grid2 container columnSpacing={4}>
      {articles.map((item) => {
        return (
          <Grid2
            xs={6}
            onClick={() => navigate(`news/${item.id}`)}
            sx={{ cursor: "pointer" }}
          >
            <Card sx={{ boxShadow: 0, backgroundColor: "transparent" }}>
              <CardActionArea sx={{ overflow: "hidden", borderRadius: "6px" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.source}
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
                  label={item.date.year}
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
