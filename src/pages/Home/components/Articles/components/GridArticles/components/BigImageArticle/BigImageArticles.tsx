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

type BigImageArticlesProps = {
  articles: ArticlesModel[];
};

const BigImageArticles = ({ articles }: BigImageArticlesProps) => {
  const navigate = useNavigate();
  return (
    <Grid2 container display="flex">
      {articles.map((item) => {
        return (
          <Grid2
            display="flex"
            xs={12}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(`news/${item.id}`)}
          >
            <Card
              sx={{
                width: "100%",
                boxShadow: 0,
                backgroundColor: "transparent",
              }}
            >
              <CardActionArea sx={{ overflow: "hidden", borderRadius: "6px" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={
                    "https://i.pinimg.com/564x/09/c5/63/09c5631c5bed3da7b6ff7e28d4652051.jpg"
                  } //{item.img}
                  alt={item.description}
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
                    margin: "0px",
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
