import { Grid, Card, CardContent, Typography } from "@mui/material";

const SummaryCards = ({ summary }) => {
  const data = [
    { label: "Balance", value: summary.balance },
    { label: "Income", value: summary.income },
    { label: "Expenses", value: summary.expenses },
  ];

  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={12} md={4} key={item.label}>
          <Card>
            <CardContent>
              <Typography variant="h6">{item.label}</Typography>
              <Typography variant="h5">₹ {item.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;