import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import APP_THEME from "./theme/index.js";
import "swiper/css";
import "swiper/css/navigation";

function AppTheme() {
  return (
    <ThemeProvider theme={APP_THEME}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppTheme />
  </StrictMode>
);
