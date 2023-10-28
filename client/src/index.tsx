import ReactDOM from "react-dom/client";
import App from "./App";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
    <ThemeProvider theme={darkTheme}>
      {window.location.pathname === "/" ? <Navbar /> : <Sidebar />}
    </ThemeProvider>
    <App />
  </>
);
