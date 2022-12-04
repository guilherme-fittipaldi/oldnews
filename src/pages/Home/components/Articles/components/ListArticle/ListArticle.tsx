import {
  Card,
  CardActionArea,
  Box,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router-dom";

type ListArticleProps = {
  title: string;
  year: string;
  img: string;
  id: string;
};

const ListArticle = ({ title, year, img, id }: ListArticleProps) => {
  const navigate = useNavigate();
  return (
    <Grid2
      mt={4}
      sx={{ cursor: "pointer" }}
      onClick={() => navigate(`news/${id}`)}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "start",
          boxShadow: 0,
          backgroundColor: "transparent",
          color: "#FFFAFA",
        }}
      >
        <CardActionArea sx={{ width: "auto" }}>
          <CardMedia
            component="img"
            height="100"
            sx={{ width: 150, borderRadius: "6px" }}
            image={img}
            alt={title}
          />
        </CardActionArea>
        <Box pl={2}>
          <Chip
            label={year}
            size="small"
            sx={{
              backgroundColor: "#fdd32d",
              fontWeight: "bold",
              fontSize: "0.7rem",
            }}
          />
          <Typography
            variant="h6"
            component="div"
            maxWidth={{ sm: "70vw", xs: "48vw" }}
            sx={{
              display: "-webkit-box",
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "1rem",
              "-webkit-line-clamp": "3",
              " -webkit-box-orient": "vertical",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Card>
    </Grid2>
  );
};

export default ListArticle;
