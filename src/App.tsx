import { ThemeProvider } from "@mui/material";
import { Router } from "./routes";
import { lightTheme } from "./shared/styles/themes/themeLight";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
