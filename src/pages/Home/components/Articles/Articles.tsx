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

  useEffect(() => {
    listArticles({
      day: 6, //new Date().getDate(),
      month: new Date().getMonth() + 1,
      page: 0,
      articleType: "events",
      orderBy: "popularity",
    }).then(function (response) {
      setArticles(response.data.content as ArticlesModel[]);
    });
    listArticles({
      day: 6, //new Date().getDate(),
      month: new Date().getMonth() + 1,
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
          title={articles ? articles[0].title : ""}
          img={
            articles
              ? articles[0].source
              : "https://static01.nyt.com/images/2008/11/19/us/cardiac600.jpg?quality=75&auto=webp&disable=upscale"
          }
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
                      title={article.title}
                      year={article.date.year.toString()}
                      img={article.source}
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
                      title={article.title}
                      year={article.date.year.toString()}
                      img={article.source}
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
