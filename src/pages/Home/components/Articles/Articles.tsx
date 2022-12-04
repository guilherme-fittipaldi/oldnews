import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { ArticlesModel } from "../../../../entities/articles/articles";
import { listArticles } from "../../../../services/articles/listArticles";
import GridArticles from "./components/GridArticles/GridArticles";
import ListArticle from "./components/ListArticle/ListArticle";
import MainArticle from "./components/MainArticle/MainArticle";
import VerticalArticle from "./components/VerticalArticles/VerticalArticle";

const Articles = () => {
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.up("lg"));
  const [articles, setArticles] = useState<ArticlesModel[]>();
  const [birthdays, setBirthdays] = useState<ArticlesModel[]>();

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

  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/b/ba/BNF_-_Latin_9474_-_Jean_Bourdichon_-_Grandes_Heures_d%27Anne_de_Bretagne_-_f._3r_-_Anne_de_Bretagne_entre_trois_saintes_%28d%C3%A9tail%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/King_Charles_I_after_original_by_van_Dyck.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Court-charles-I-sm.jpg/450px-Court-charles-I-sm.jpg",
    "https://i.pinimg.com/564x/09/c5/63/09c5631c5bed3da7b6ff7e28d4652051.jpg",
  ];

  useEffect(() => {
    listArticles({
      day: new Date().getDate(),
      month: 1, // new Date().getMonth() - 1,
      page: 0,
      orderBy: "popularity",
    }).then(function (response) {
      setArticles(response.data.content as ArticlesModel[]);
    });
    listArticles({
      day: new Date().getDate(),
      month: 1, // new Date().getMonth() - 1,
      page: 0,
      articleType: "births",
      orderBy: "popularity",
    }).then(function (response) {
      setBirthdays(response.data.content as ArticlesModel[]);
    });
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt={{ lg: 4 }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        bgcolor={{ lg: "#fffafa", xs: "#353636" }}
      >
        <MainArticle
          id={articles ? articles[0].id : ""}
          year={articles ? articles[0].date.year.toString() : "   "}
          title={articles ? articles[0].description : ""}
          img="https://bonniedundee1689.files.wordpress.com/2016/12/battleofreading_zpsnvkc818i.jpg"
        />
        <Grid
          container
          direction="row"
          mt={{ lg: 2 }}
          mb={{ lg: 4, xs: 4 }}
          width={{ lg: "84vw", xs: "94vw" }}
          maxWidth="1200px"
        >
          {articles && showText
            ? articles.map(
                (article, index) =>
                  index > 0 &&
                  index < 5 && (
                    <VerticalArticle
                      id={article.id}
                      title={article.description}
                      year={article.date.year.toString()}
                      img={images[index - 1]}
                      //img={article.title}
                      index={index - 1}
                    />
                  )
              )
            : articles &&
              articles.map(
                (article, index) =>
                  index > 0 &&
                  index < 5 && (
                    <ListArticle
                      id={article.id}
                      title={article.description}
                      year={article.date.year.toString()}
                      img={images[index - 1]}
                      //img={article.title}
                    />
                  )
              )}
        </Grid>
      </Grid>
      {articles && birthdays && (
        <GridArticles articles={articles} birthdays={birthdays} />
      )}
    </Grid>
  );
};

export default Articles;
