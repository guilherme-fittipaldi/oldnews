import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news/:id" element={<News />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
