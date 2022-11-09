import React from "react";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

type Article = {
  title: string;
  year: string;
  img: string;
};

type BirthdayArticlesProps = {
  articles: Article[];
};

const BirthdayArticles = ({ articles }: BirthdayArticlesProps) => {
  return (
    <Grid2 container spacing={2.5}>
      {articles.map((item) => {
        return (
          <Grid2 xs={12}>
            <Card
              sx={{
                display: "flex",
                alignItems: "start",
                boxShadow: 0,
                backgroundColor: "transparent",
              }}
            >
              <CardActionArea
                sx={{ width: "auto", overflow: "hidden", borderRadius: "6px" }}
              >
                <CardMedia
                  component="img"
                  height="75"
                  sx={{
                    width: 75,
                    borderRadius: "6px",
                    background: `linear-gradient(360deg, rgba(22, 22, 22, 0.898) 30%, rgba(49, 48, 48, 0) 98.09%), url(${item.img}) no-repeat`,
                    transition:
                      "transform 0.2s ease-in-out 0s, filter 0.2s ease-in-out 0s",
                    backgroundSize: "cover",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    overflow: "hidden",
                  }}
                  image={item.img}
                  alt={item.title}
                />
              </CardActionArea>
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  py: 0,
                }}
              >
                <Typography
                  maxWidth={190}
                  variant="h6"
                  component="div"
                  sx={{
                    " -webkit-box-orient": "vertical",
                    overflow: "hidden",
                    "-webkit-line-clamp": "1",
                    display: "-webkit-box",
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

export default BirthdayArticles;
