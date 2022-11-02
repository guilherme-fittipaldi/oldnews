import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ListArticle from "./components/ListArticle/ListArticle";
import MainArticle from "./components/MainArticle/MainArticle";
import VerticalArticle from "./components/VerticalArticles/VerticalArticle";

const Articles = () => {
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.up("lg"));

  const verticalArticles = [
    {
      year: "2017",
      title:
        "Catalonia's parliament voted to declare the region independent from Spain",
      img: "https://cdn.britannica.com/05/102605-004-8C35F404/Barcelona.jpg?w=400&h=200&c=crop",
    },
    {
      year: "2014",
      title:
        "American singer Taylor Swift released 1989, which she described as her first “official pop album”",
      img: "https://cdn.britannica.com/84/183184-004-1B50EDC6/Taylor-Swift-2015.jpg?w=400&h=200&c=crop",
    },
    {
      year: "2004",
      title: "The Boston Red Sox ended the “Curse of the Bambino”",
      img: "https://cdn.britannica.com/12/125712-004-59EA48B3/Fenway-Park-Boston.jpg?w=400&h=200&c=crop",
    },
    {
      year: "2000",
      title:
        "At a concert near Tel Aviv, the music of German composer Richard Wagner",
      img: "https://cdn.britannica.com/03/135103-004-B7510B10/Richard-Wagner.jpg?w=400&h=200&c=crop",
    },
  ];

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt={{ lg: 4 }}
      bgcolor={{ lg: "#fffafa", xs: "#353636" }}
    >
      <MainArticle
        year="1978"
        title="Anwar Sadat and Menachem Begin awarded Nobel Peace Prize"
        img="https://cdn.britannica.com/90/151790-050-D17F8329/Anwar-Sadat-Pres-Egyptian-Menachem-Begin-Israeli-September-17-1978.jpg?w=725&h=408&c=crop"
      />
      <Grid
        container
        direction="row"
        mt={2}
        mb={{ lg: 4, xs: 2 }}
        width={{ lg: "84vw", xs: "94vw" }}
        maxWidth="1200px"
      >
        {showText
          ? verticalArticles.map((article, index) => {
              return (
                <VerticalArticle
                  title={article.title}
                  year={article.year}
                  img={article.img}
                  index={index}
                />
              );
            })
          : verticalArticles.map((article) => {
              return (
                <ListArticle
                  title={article.title}
                  year={article.year}
                  img={article.img}
                />
              );
            })}
      </Grid>
    </Grid>
  );
};

export default Articles;
