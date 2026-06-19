import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

import { useAppSelector } from "./hooks/reduxHookes";

import { useSelector } from "react-redux";

function App() {
  const theme = useAppSelector((state) => state.ui.theme);

  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route path="/finance-dashboard" element={<Dashboard />} />

          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
