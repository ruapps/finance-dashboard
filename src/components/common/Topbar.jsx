import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Switch,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { setRole, setTheme } from "../../features/ui/uiSlice";
import { Drawercontext } from "../../context/Drawercontext";
import { useContext } from "react";

const Topbar = () => {
  const { open, handleDrawer } = useContext(Drawercontext);
  const dispatch = useDispatch();
  const { role, theme } = useSelector((state) => state.ui);

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Mobile Menu Button */}
        {!open && (
          <IconButton
            sx={{
              display: { md: "none" },

              zIndex: 1300,
            }}
            onClick={() => handleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6">Finance Dashboard</Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Role Switch */}
          <Select
            value={role}
            onChange={(e) => dispatch(setRole(e.target.value))}
            size="small"
          >
            <MenuItem value="viewer">Viewer</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>

          {/* Theme Toggle */}
          <Switch
            checked={theme === "dark"}
            onChange={() =>
              dispatch(setTheme(theme === "light" ? "dark" : "light"))
            }
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
