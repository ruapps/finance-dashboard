import { Box, Grid } from "@mui/material";
import Sidebar from "../components/common/Sidebar";
import Topbar from "../components/common/Topbar";
import Drawerprovider from "../context/Drawerprovider";

const MainLayout = ({ children }) => {
  return (
    <Grid sx={{ minHeight: "100vh", display: "flex" }}>
      <Drawerprovider>
        <Grid sm={3} xs={0}>
          <Sidebar />
        </Grid>

        <Grid sx={{width: "100%"}}>
          <Topbar />
          <Box sx={{ p: 3 }}>{children}</Box>
        </Grid>
      </Drawerprovider>
    </Grid>
  );
};

export default MainLayout;
