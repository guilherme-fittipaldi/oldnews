import { Typography, Card, CardMedia, Chip } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Header from "../Home/components/Header/Header";

function News() {
  return (
    <>
      <Header />
      <Grid2
        container
        justifyContent="center"
        mt={4}
      >
        <Grid2
          container
          direction="column"
          alignItems="center"
          width="84vw"
          maxWidth="1200px"
        >
          <Grid2
            container
            spacing={4}
            xs={12}
            md={8}
          >
            <Grid2 xs={12}>
              <Typography variant="h4" component="h1">Notícia</Typography>
              <Typography variant="subtitle1">Subtítulo da notícia</Typography>
            </Grid2>
            <Grid2 xs={12}>
              <Card
                sx={{
                  boxShadow: 0,
                  backgroundColor: "transparent",
                }}
              >
                <CardMedia
                  component="img"
                  image="https://cdn.britannica.com/04/5104-004-51F5F120/Flag-Antigua-and-Barbuda.jpg?w=400&h=200&c=crop"
                  alt="Antigua and Barbuda achieved independence from the United Kingdom"
                />
              </Card>
            </Grid2>
            <Grid2>
              <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo exercitationem vel impedit sunt voluptate dolore ipsa deserunt aspernatur ratione repellat, fugiat nulla omnis rem? Est repudiandae eaque fuga sed.</Typography>
            </Grid2>
          </Grid2>

          <Grid2
            container
            spacing={1}
            xs={12}
            md={8}
            my={4}
          >
            <Grid2>
              <Chip
                label="categoria1"
                size="small"
                sx={{
                  backgroundColor: "#fdd32d",
                  fontWeight: "bold",
                  fontSize: "0.7rem"
                }}
              />
            </Grid2>
            <Grid2>  
              <Chip
                label="categoria2"
                size="small"
                sx={{
                  backgroundColor: "#fdd32d",
                  fontWeight: "bold",
                  fontSize: "0.7rem"
                }}
              />
            </Grid2>
            <Grid2>  
              <Chip
                label="categoria3"
                size="small"
                sx={{
                  backgroundColor: "#fdd32d",
                  fontWeight: "bold",
                  fontSize: "0.7rem"
                }}
              />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
}

export default News;
