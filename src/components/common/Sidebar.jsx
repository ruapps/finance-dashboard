import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  CssBaseline
} from "@mui/material";

import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Drawercontext } from "../../context/Drawercontext";
import { useContext } from "react";

const Sidebar = () => {
  const { open, handleDrawer } = useContext(Drawercontext);
  const navigate = useNavigate();

  return (
    <>
      <Drawer
        variant="temporary"
        open={open}
        onClose={() => handleDrawer(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {open && (
          <IconButton
            sx={{
              position: "absolute",
              width: "calc(100% - 95%)",
              top: "0px",
              right: "0px",
              zIndex: 1300,
              transition: "all 0.5s ease-in 0.4s",
            }}
            onClick={() => handleDrawer(false)}
          >
            <Close />
          </IconButton>
        )}
        <List>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("/transactions")}>
            <ListItemText primary="Transactions" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Desktop Sidebar */}
      <Box
       
        sx={{
          display: { xs: "none", md: "block" },
          width: 240,
        }}
      >
        <List>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("/transactions")}>
            <ListItemText primary="Transactions" />
          </ListItemButton>
        </List>
        <CssBaseline />
      </Box>
    </>
  );
};

export default Sidebar;
