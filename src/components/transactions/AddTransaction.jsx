import {
  Button,
  Dialog,
  DialogTitle,
  TextField,
  MenuItem,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../features/transactions/transactionSlice";

const AddTransaction = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      addTransaction({
        ...form,
        id: Date.now(),
        amount: Number(form.amount),
      }),
    );
    setOpen(false);
  };

//   if (!form.amount || !form.category) {
//     alert("Please fill all fields");
//     return;
//   }

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)} sx={{ mb: 2, display: "block" }}>
        Add Transaction
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Transaction</DialogTitle>

        <DialogContent>
          <TextField
            label="Amount"
            fullWidth
            margin="dense"
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />

          <TextField
            label="Category"
            fullWidth
            margin="dense"
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />

          <TextField
            select
            label="Type"
            fullWidth
            margin="dense"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <MenuItem value="income">Income</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>
          </TextField>

          <TextField
            type="date"
            fullWidth
            margin="dense"
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddTransaction;
