import React from "react";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { ArticlesModel } from "../../../../../../../../entities/articles/articles";
import { useNavigate } from "react-router-dom";

type BirthdayArticlesProps = {
  articles: ArticlesModel[];
};

const BirthdayArticles = ({ articles }: BirthdayArticlesProps) => {
  const navigate = useNavigate();
  return (
    <Grid2 container>
      {articles.map(
        (item, index) =>
          index < 4 && (
            <Grid2
              xs={12}
              pb={2.5}
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
                  }}
                >
                  <CardMedia
                    component="img"
                    height="75"
                    sx={{
                      width: 75,
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
                    alt={item.title}
                  />
                </CardActionArea>
                <Box pl={2}>
                  <Typography
                    maxWidth={{ sm: "18vw", xs: "70vw" }}
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
                  <Typography
                    // maxWidth={190}
                    // variant="p"
                    component="div"
                    sx={{
                      " -webkit-box-orient": "vertical",
                      overflow: "hidden",
                      "-webkit-line-clamp": "1",
                      display: "-webkit-box",
                    }}
                  >
                    {item.date.year}
                  </Typography>
                </Box>
              </Card>
            </Grid2>
          )
      )}
    </Grid2>
  );
};

export default BirthdayArticles;
