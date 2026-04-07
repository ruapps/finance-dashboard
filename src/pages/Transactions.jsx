import MainLayout from "../layouts/MainLayout";
import TransactionTable from "../components/transactions/TransactionTable";
import Filters from "../components/transactions/Filters";
import AddTransaction from "../components/transactions/AddTransaction";
import EditTransaction from "../components/transactions/EditTransaction";
import { useState } from "react";
import { useSelector } from "react-redux";

const Transactions = () => {
  const { transactions, status } = useSelector((state) => state.transactions);
  const { filters, role } = useSelector((state) => state.ui);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  // Handle loading and error states for transactions on implementation of API calls
  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error loading data</p>;

  if (transactions.length === 0) {
    return <p>No transactions found</p>;
  }

  const filteredData = transactions.filter((t) => {
    return (
      (filters.type === "all" || t.type === filters.type) &&
      t.category.toLowerCase().includes(filters.search.toLowerCase())
    );
  });

  const handleEdit = (data) => {
    setSelected(data);
    setOpen(true);
  };

  return (
    <MainLayout>
      <Filters transactions={transactions} />

      {role === "admin" && <AddTransaction />}
      <TransactionTable data={filteredData} onEdit={handleEdit} />
      <EditTransaction
        open={open}
        handleClose={() => setOpen(false)}
        selected={selected}
      />
    </MainLayout>
  );
};

export default Transactions;
