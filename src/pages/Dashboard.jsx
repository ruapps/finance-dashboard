import MainLayout from "../layouts/MainLayout";
import SummaryCards from "../components/dashboard/SummaryCards";
import BalanceChart from "../components/dashboard/BalanceChart";
import CategoryChart from "../components/dashboard/CategoryChart";
import InsightsPanel from "../components/insights/InsightsPanel";

import { useSelector } from "react-redux";
import {
  calculateSummary,
  categoryBreakdown,
  balanceTrend,
} from "../utils/calculations";

import {
  getHighestSpendingCategory,
  getMonthlyComparison,
} from "../utils/insights";

import { Grid } from "@mui/material";

const Dashboard = () => {
  const { transactions } = useSelector((state) => state.transactions);

  const summary = calculateSummary(transactions);
  const categoryData = categoryBreakdown(transactions);
  const trendData = balanceTrend(transactions);

  const highest = getHighestSpendingCategory(transactions);
  const monthly = getMonthlyComparison(transactions);

  return (
    <MainLayout>
      <SummaryCards summary={summary} />

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <BalanceChart data={trendData} />
        </Grid>

        <Grid item xs={12} md={6}>
          <CategoryChart data={categoryData} />
        </Grid>

        <Grid item xs={12}>
          <InsightsPanel highest={highest} monthly={monthly} />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Dashboard;