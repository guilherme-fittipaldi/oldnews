import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const GridArticles = () => {
  const news = [
    {
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      title: "Lizard",
      year: "2020",
    },
    {
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      title: "Lizard",
      year: "2001",
    },
  ];

  const smallNews = [
    {
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      title: "Lizard",
      year: "2020",
    },
    {
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      title: "Lizard",
      year: "2001",
    },
    {
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      title: "Lizard",
      year: "2020",
    },
    {
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      title: "Lizard",
      year: "2001",
    },
  ];

  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      width="84vw"
      maxWidth="1200px"
    >
      <Grid2 container columnSpacing={6}>
        {/* Latests news */}
        <Grid2 xs={8}>
          <Typography mb={2} variant="h4" component="h4" fontWeight="bold">
            Latests
          </Typography>

          {/* Top news */}
          <Grid2 container columnSpacing={4}>
            {news.map((item) => {
              return (
                <Grid2 xs={6}>
                  <Card sx={{ boxShadow: 0, backgroundColor: "transparent" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={item.image}
                        alt={item.title}
                        sx={{
                          borderRadius: "6px",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transition:
                            "transform 0.2s ease-in-out 0s, filter 0.2s ease-in-out 0s",
                          "&:hover": {
                            transform: "scale(1.02)",
                          },
                          objectFit: "cover",
                        }}
                      />
                    </CardActionArea>
                    <CardContent sx={{ px: 0 }}>
                      <Chip
                        label={item.year}
                        sx={{
                          backgroundColor: "#fdd32d",
                          fontWeight: "bold",
                        }}
                      />
                      <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid2>
              );
            })}
          </Grid2>

          {/* Smaller news */}
          <Grid2 container spacing={4} mt={2}>
            {smallNews.map((item) => {
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
                    <CardActionArea sx={{ width: "auto" }}>
                      <CardMedia
                        component="img"
                        height="100"
                        sx={{ width: 150, borderRadius: "6px" }}
                        image={item.image}
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
                      <Typography variant="h6" component="div">
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid2>
              );
            })}
          </Grid2>
        </Grid2>

        {/* Birthdays */}
        <Grid2 xs={4}>
          <Typography mb={2} variant="h4" component="h4" fontWeight="bold">
            Birthdays
          </Typography>

          <Grid2 container spacing={2.5}>
            {smallNews.map((item) => {
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
                    <CardActionArea sx={{ width: "auto" }}>
                      <CardMedia
                        component="img"
                        height="75"
                        sx={{ width: 75, borderRadius: "6px" }}
                        image={item.image}
                        alt={item.title}
                      />
                    </CardActionArea>
                    <CardContent sx={{ flex: "1 0 auto", py: 0 }}>
                      <Typography variant="h6" component="div">
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid2>
              );
            })}
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default GridArticles;
