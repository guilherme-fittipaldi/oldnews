import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

type ListArticleProps = {
  title: string;
  year: string;
  img: string;
};

const ListArticle = ({ title, year, img }: ListArticleProps) => {
  return (
    <Grid2 mt={2}>
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
        <CardContent
          sx={{
            flex: "1 0 auto",
            py: 0,
          }}
        >
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
              margin: "0px 16px 0px 0px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              "-webkit-line-clamp": "2",
              " -webkit-box-orient": "vertical",
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default ListArticle;
