import { Box, Chip, Typography } from "@mui/material";

type MainArticleProps = {
  title: string;
  year: string;
  img: string;
};

const MainArticle = ({ title, year, img }: MainArticleProps) => {
  return (
    <Box
      position="relative"
      width={{ xs: "100vw", lg: "84vw" }}
      maxWidth="1200px"
      height="60vh"
      display="flex"
      borderRadius={{ lg: "6px", xs: "0px" }}
      sx={{ overflow: "hidden" }}
    >
      <Box
        position="relative"
        width={{ xs: "100vw", lg: "84vw" }}
        maxWidth="1200px"
        height="60vh"
        display="flex"
        padding="2vw"
        borderRadius={{ lg: "6px", xs: "0px" }}
        sx={{
          background: `linear-gradient(360deg, rgba(22, 22, 22, 0.898) 30%, rgba(49, 48, 48, 0) 98.09%), url(
          ${img}
        ) no-repeat`,
          transition:
            "transform 0.2s ease-in-out 0s, filter 0.2s ease-in-out 0s",
          backgroundSize: "cover",
          "&:hover": {
            transform: "scale(1.02)",
          },
          overflow: "hidden",
        }}
      ></Box>
      <Box position="absolute" bottom="15px" padding="2vw">
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
