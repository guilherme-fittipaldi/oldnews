import React from "react";
import { Box } from "@mui/system";
import { Chip, Typography } from "@mui/material";
import "./main-article.css";

type MainArticleProps = {
  title: string;
  year: string;
  img: string;
};

const MainArticle = ({ title, year, img }: MainArticleProps) => {
  return (
    <Box
      position="relative"
      width="90vw"
      height="60vh"
      display="flex"
      padding="2vw"
      className="content"
      sx={{
        background: `linear-gradient(360deg, rgba(22, 22, 22, 0.898) 30%, rgba(49, 48, 48, 0) 98.09%), url(
          ${img}
        ) no-repeat`,
        backgroundSize: "cover",
        "&:hover": {
          transition: "opacity 0.2s ease-in-out 0s",
          transform: "scale(1.02)",
        },
      }}
    >
      <Box position="absolute" bottom="35px">
        <Chip
          label={year}
          sx={{ backgroundColor: "#fdd32d", fontWeight: "bold" }}
        />
        <Typography variant="h4" mt={2} sx={{ color: "white" }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default MainArticle;
