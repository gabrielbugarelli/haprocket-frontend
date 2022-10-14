import { ThemeProvider } from "@mui/material";
import { Router } from "./routes";
import { lightTheme } from "./shared/styles/themes/themeLight";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
