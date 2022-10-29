import "./App.css";
import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import GridArticles from "./components/GridArticles/GridArticles";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "GT Walsheim Pro",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h4: { fontWeight: "bold" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Articles />
      <GridArticles />
    </ThemeProvider>
  );
}

export default App;
