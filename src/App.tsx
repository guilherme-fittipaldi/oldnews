import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import GridArticles from "./components/GridArticles/GridArticles";

function App() {
  return (
    <>
      <Header />
      <Articles />
      <GridArticles />
    </>
  );
}

export default App;
