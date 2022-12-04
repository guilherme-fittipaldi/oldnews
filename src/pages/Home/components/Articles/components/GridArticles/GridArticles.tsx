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

  // const articles= [
  //   {
  //     img: "https://cdn.britannica.com/04/5104-004-51F5F120/Flag-Antigua-and-Barbuda.jpg?w=400&h=200&c=crop",
  //     title:
  //       "Antigua and Barbuda achieved independence from the United Kingdom",
  //     year: "1981",
  //   },
  //   {
  //     img: "https://cdn.britannica.com/31/76531-050-371C7836/bomb-Mike-Marshall-Islands-November-1952.jpg?w=725&h=408&c=crop",
  //     title: "First thermonuclear bomb tested by the United States",
  //     year: "1952",
  //   },
  // ];

  const smallArticles = [
    {
      img: "https://cdn.britannica.com/37/75437-004-75B8CD4B/detail-William-Shakespeare-portrait-oil-painting-John-1610.jpg?w=400&h=200&c=crop",
      title:
        "William Shakespeare's The Tempest was reportedly performed for the first time.",
      year: "1611",
    },
    {
      img: "https://cdn.britannica.com/77/2577-004-DA7549AE/The-Creation-of-Adam-ceiling-fresco-Michelangelo.jpg?w=400&h=200&c=crop",
      title:
        "For the first time, the general public was able to view Michelangelo's fresco on the ceiling of the Sistine Chapel",
      year: "1512",
    },
    {
      img: "https://cdn.britannica.com/66/96866-004-F622FD38/Flag-European-Union.jpg?w=400&h=200&c=crop",
      title:
        "The Maastricht Treaty entered into force, thereby establishing the European Union.",
      year: "1993",
    },
    {
      img: "https://cdn.britannica.com/53/93453-004-2CEB215D/Leonardo-DiCaprio-Kate-Winslet-Titanic-James-Cameron.jpg?w=400&h=200&c=crop",
      title:
        "Titanic, a drama about the doomed ocean liner, had its first public screening at the Tokyo International Film Festival",
      year: "1997",
    },
  ];

  // const birthdays = [
  //   {
  //     title: "Gordon Ramsay",
  //     year: "1966",
  //     img: "https://www.onthisday.com/images/people/gordon-ramsay-medium.jpg",
  //   },
  //   {
  //     title: "Vlad the Impaler",
  //     year: "1431",
  //     img: "https://www.onthisday.com/images/people/vlad-the-impaler.jpg",
  //   },
  //   {
  //     title: "SZA",
  //     year: "1990",
  //     img: "https://www.onthisday.com/images/people/sza-medium.jpg",
  //   },
  //   {
  //     title: "Nerva",
  //     year: "30 AD",
  //     img: "https://www.onthisday.com/images/people/nerva.jpg",
  //   },
  // ];

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
              articles={[articles[7], articles[8], articles[9], articles[9]]}
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
                articles[9],
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
