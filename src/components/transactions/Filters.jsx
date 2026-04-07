import { TextField, Select, MenuItem, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../features/ui/uiSlice";
import { Button } from "@mui/material";
import { exportToCSV } from "../../utils/export";

const Filters = ({ transactions }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.ui.filters);

  return (
    <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: 2,
    mb: 2,
  }}
>
      <TextField
        label="Search"
        value={filters.search}
        onChange={(e) =>
          dispatch(setFilters({ search: e.target.value }))
        }
      />

      <Select
        value={filters.type}
        onChange={(e) =>
          dispatch(setFilters({ type: e.target.value }))
        }
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="income">Income</MenuItem>
        <MenuItem value="expense">Expense</MenuItem>
      </Select>
      <Button onClick={() => exportToCSV(transactions)}>Export CSV</Button>
    </Box>
  );
};

export default Filters;