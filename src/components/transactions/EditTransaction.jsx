import {
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTransaction } from "../../features/transactions/transactionSlice";

const EditTransaction = ({ open, handleClose, selected }) => {
  const [form, setForm] = useState(selected || {});
  const dispatch = useDispatch();

  useEffect(() => {
    setForm(selected || {});
  }, [selected]);

  const handleSave = () => {
    dispatch(updateTransaction(form));
    handleClose();
  };

  if (!selected) return null;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Transaction</DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          label="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: Number(e.target.value) })
          }
        />

        <TextField
          fullWidth
          margin="dense"
          label="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <TextField
          select
          fullWidth
          margin="dense"
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
        >
          <MenuItem value="income">Income</MenuItem>
          <MenuItem value="expense">Expense</MenuItem>
        </TextField>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTransaction;