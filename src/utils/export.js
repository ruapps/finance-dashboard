export const exportToCSV = (data) => {
  const headers = ["Date", "Amount", "Category", "Type"];

  const rows = data.map((t) => [
    t.date,
    t.amount,
    t.category,
    t.type,
  ]);

  let csvContent =
    "data:text/csv;charset=utf-8," +
    [headers, ...rows].map((e) => e.join(",")).join("\n");

  const link = document.createElement("a");
  link.href = encodeURI(csvContent);
  link.download = "transactions.csv";
  link.click();
};