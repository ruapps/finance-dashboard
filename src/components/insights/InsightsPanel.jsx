import { Card, CardContent, Typography } from "@mui/material";

const InsightsPanel = ({ highest, monthly }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Insights</Typography>

        <Typography sx={{ mt: 2 }}>
          Highest spending category: <b>{highest.category}</b> (₹ {highest.amount})
        </Typography>

        <Typography sx={{ mt: 2 }}>
          This month expenses: ₹ {monthly.currentTotal}
        </Typography>

        <Typography>
          Last month expenses: ₹ {monthly.lastTotal}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          {monthly.change >= 0
            ? `Expenses increased by ${monthly.change.toFixed(1)}%`
            : `Expenses decreased by ${Math.abs(monthly.change).toFixed(1)}%`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InsightsPanel;