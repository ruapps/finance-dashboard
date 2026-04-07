import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";

const TransactionTable = ({ data, onEdit }) => {
  const { role } = useSelector((state) => state.ui);

  return (
    <TableContainer sx={{ overflowX: "auto" }}>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Type</TableCell>
              {role === "admin" && <TableCell>Actions</TableCell>}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((t) => (
              <TableRow key={t.id}>
                <TableCell>{t.date}</TableCell>
                <TableCell>₹ {t.amount}</TableCell>
                <TableCell>{t.category}</TableCell>
                <TableCell>{t.type}</TableCell>

                {role === "admin" && (
                  <TableCell>
                    <Button onClick={() => onEdit(t)}>Edit</Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </TableContainer>
  );
};

export default TransactionTable;
