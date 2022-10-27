import React from "react";

import { Grid } from "@mui/material";
import MainArticle from "../MainArticle/MainArticle";

const Articles = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt={4}
    >
      <MainArticle
        year="1978"
        title="Anwar Sadat and Menachem Begin awarded Nobel Peace Prize"
        img="https://cdn.britannica.com/90/151790-050-D17F8329/Anwar-Sadat-Pres-Egyptian-Menachem-Begin-Israeli-September-17-1978.jpg?w=725&h=408&c=crop"
      />
    </Grid>
  );
};

export default Articles;
