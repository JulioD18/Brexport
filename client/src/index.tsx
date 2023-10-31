import ReactDOM from "react-dom/client";

import App from "./App";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import store from "./redux/store";

import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "rgba(0, 0, 0, 0.7)", // Transparent paper background
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Box>
            <Box>
              <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="*" element={<Sidebar />} />
              </Routes>
            </Box>
            <Box>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Box position="relative">
                      <App />
                    </Box>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Box position="relative" left="7%">
                      <App />
                    </Box>
                  }
                />
              </Routes>
            </Box>
          </Box>
        </ThemeProvider>
      </Router>
    </Provider>
  </>
);
