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

type SmallArticlesProps = {
  articles: ArticlesModel[];
};

const SmallArticles = ({ articles }: SmallArticlesProps) => {
  const navigate = useNavigate();
  return (
    <Grid2 container spacing={1} columnSpacing={4}>
      {articles.map((item) => {
        return (
          <Grid2
            xs={6}
            onClick={() => navigate(`news/${item.id}`)}
            sx={{ cursor: "pointer" }}
          >
            <Card
              sx={{
                display: "flex",
                alignItems: "start",
                boxShadow: 0,
                backgroundColor: "transparent",
              }}
            >
              <CardActionArea
                sx={{
                  width: "auto",
                  overflow: "hidden",
                  borderRadius: "6px",
                  minWidth: 175,
                }}
              >
                <CardMedia
                  component="img"
                  height="100"
                  sx={{
                    minWidth: 175,
                    borderRadius: "6px",
                    background: `linear-gradient(360deg, rgba(22, 22, 22, 0.898) 30%, rgba(49, 48, 48, 0) 98.09%), url(${"https://i.pinimg.com/564x/09/c5/63/09c5631c5bed3da7b6ff7e28d4652051.jpg"}) no-repeat`,
                    transition:
                      "transform 0.2s ease-in-out 0s, filter 0.2s ease-in-out 0s",
                    backgroundSize: "cover",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    overflow: "hidden",
                  }}
                  image={item.source}
                  alt={item?.title}
                />
              </CardActionArea>
              <CardContent sx={{ flex: "1 0 auto", py: 0 }}>
                <Chip
                  label={item.date.year}
                  size="small"
                  sx={{
                    backgroundColor: "#fdd32d",
                    fontWeight: "bold",
                    fontSize: "0.7rem",
                  }}
                />
                <Typography
                  component="div"
                  maxWidth={{ lg: "10vw", xs: "12vw" }}
                  pt={1}
                  sx={{
                    margin: "0px",
                    lineHeight: "22px",
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

export default SmallArticles;
