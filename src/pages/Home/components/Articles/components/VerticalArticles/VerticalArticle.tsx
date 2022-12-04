import { Box, Chip, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type VerticalArticleProps = {
  title: string;
  year: string;
  img: string;
  index: number;
  id: string;
};

const VerticalArticle = ({
  title,
  year,
  img,
  index,
  id,
}: VerticalArticleProps) => {
  const navigate = useNavigate();
  return (
    <Grid
      item
      xs={3}
      position="relative"
      height="55vh"
      display="flex"
      onClick={() => navigate(`news/${id}`)}
      sx={{
        borderRadius:
          index === 0
            ? "6px 0px 0px 6px"
            : index === 3
            ? "0px 6px 6px 0px"
            : "0px 0px 0px 0px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <Box
        position="relative"
        height="55vh"
        width="100%"
        display="flex"
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
          transition:
            "transform 0.2s ease-in-out 0s, filter 0.2s ease-in-out 0s",
          "&:hover": {
            transform: "scale(1.02)",
          },
          objectFit: "cover",
        }}
      ></Box>
      <Box position="absolute" bottom="15px" padding="1vw">
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
