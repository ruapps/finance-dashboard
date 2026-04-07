import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  const { theme } = useSelector((state) => state.ui);

  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <BrowserRouter basename="/finance-dashboard">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;