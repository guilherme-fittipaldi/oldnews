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

type Article = {
  title: string;
  year: string;
  img: string;
};

type BigImageArticlesProps = {
  articles: Article[];
};

const BigImageArticles = ({ articles }: BigImageArticlesProps) => {
  return (
    <Grid2 container display="flex">
      {articles.map((item) => {
        return (
          <Grid2 display="flex">
            <Card sx={{ boxShadow: 0, backgroundColor: "transparent" }}>
              <CardActionArea sx={{ overflow: "hidden", borderRadius: "6px" }}>
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
                  size="small"
                  sx={{
                    backgroundColor: "#fdd32d",
                    fontWeight: "bold",
                    fontSize: "0.7rem",
                    marginBottom: 1,
                  }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    margin: " 0px",
                    // lineHeight: "22px",
                    color: "rgb(53, 54, 54)",
                    fontWeight: "bold",
                    display: "-webkit-box",
                    overflow: "hidden",
                    "-webkit-line-clamp": "3",
                    " -webkit-box-orient": "vertical",
                  }}
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

export default BigImageArticles;
