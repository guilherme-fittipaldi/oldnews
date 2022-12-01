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

type SmallArticlesProps = {
  articles: Article[];
};

const SmallArticles = ({ articles }: SmallArticlesProps) => {
  return (
    <Grid2 container spacing={1} columnSpacing={4}>
      {articles.map((item) => {
        return (
          <Grid2 xs={6}>
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
                  height="100"
                  sx={{
                    width: 150,
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
              <CardContent sx={{ flex: "1 0 auto", py: 0 }}>
                <Chip
                  label={item.year}
                  size="small"
                  sx={{
                    backgroundColor: "#fdd32d",
                    fontWeight: "bold",
                    fontSize: "0.7rem",
                  }}
                />
                <Typography
                  component="div"
                  maxWidth={190}
                  mt={1}
                  sx={{
                    margin: " 0px",
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
