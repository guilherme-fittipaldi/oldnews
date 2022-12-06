import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import BirthdayArticles from "./components/BirthdayArticles/BirthdayArticles";
import BigArticles from "./components/BigArticles/BigArticles";
import SmallArticles from "./components/SmallArticles/SmallArticles";
import BigImageArticles from "./components/BigImageArticle/BigImageArticles";
import { ArticlesModel } from "../../../../../../entities/articles/articles";

type GridArticlesProps = {
  articles: ArticlesModel[];
  birthdays: ArticlesModel[];
};

const GridArticles = ({ articles, birthdays }: GridArticlesProps) => {
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      width={{ lg: "84vw", xs: "94vw" }}
      maxWidth="1200px"
      mb={{ lg: 5, xs: 1 }}
    >
      {showText ? (
        <Grid2 container columnSpacing={6}>
          {/* Latests news */}
          <Grid2 xs={8}>
            <Typography mb={2} variant="h4" component="h4" fontWeight="bold">
              Latests
            </Typography>
            <BigArticles articles={[articles[5], articles[6]]} />
            <SmallArticles
              articles={[articles[7], articles[8], articles[9], articles[10]]}
            />
          </Grid2>
          {/* Birthdays */}
          <Grid2 xs={4}>
            <Typography mb={2} variant="h4" component="h4" fontWeight="bold">
              Birthdays
            </Typography>

            <BirthdayArticles articles={birthdays} />
          </Grid2>
        </Grid2>
      ) : (
        <Grid2 container>
          {/* Latests news */}
          <Grid2>
            <Typography
              mb={2}
              mt={2}
              variant="h4"
              component="h4"
              fontWeight="bold"
            >
              Latests
            </Typography>
            <BigImageArticles
              articles={[
                articles[5],
                articles[6],
                articles[7],
                articles[8],
                articles[9],
                articles[10],
              ]}
            />
            <Typography mb={2} variant="h4" component="h4" fontWeight="bold">
              Birthdays
            </Typography>

            <BirthdayArticles articles={birthdays} />
          </Grid2>
        </Grid2>
      )}
    </Grid2>
  );
};

export default GridArticles;
