import React from "react";

import { Box, Chip, Grid, Typography } from "@mui/material";

type VerticalArticleProps = {
  title: string;
  year: string;
  img: string;
  index: number;
};

const VerticalArticle = ({ title, year, img, index }: VerticalArticleProps) => {
  return (
    <Grid
      item
      xs={3}
      position="relative"
      height="55vh"
      display="flex"
      padding="2vw"
      sx={{
        borderRadius:
          index === 0
            ? "6px 0px 0px 6px"
            : index === 3
            ? "0px 6px 6px 0px"
            : "0px 0px 0px 0px",
        background: `linear-gradient(360deg, rgba(22, 22, 22, 0.898) 30%, rgba(49, 48, 48, 0) 98.09%), url(
          ${img}
        ) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
          transition: "opacity 0.2s ease-in-out 0s",
          transform: "scale(1.02)",
        },
        objectFit: "cover",
      }}
    >
      <Box position="absolute" bottom="35px">
        <Chip
          label={year}
          sx={{ backgroundColor: "#fdd32d", fontWeight: "bold" }}
        />
        <Typography variant="h6" mt={2} sx={{ color: "white" }}>
          {title}
        </Typography>
      </Box>
    </Grid>
  );
};

export default VerticalArticle;
