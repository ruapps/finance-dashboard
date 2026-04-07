export const calculateSummary = (transactions) => {
  let income = 0;
  let expenses = 0;

  transactions.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else expenses += t.amount;
  });

  return {
    income,
    expenses,
    balance: income - expenses,
  };
};

export const categoryBreakdown = (transactions) => {
  const map = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      map[t.category] = (map[t.category] || 0) + t.amount;
    }
  });

  return Object.keys(map).map((key) => ({
    name: key,
    value: map[key],
  }));
};

export const balanceTrend = (transactions) => {
  let balance = 0;

  return transactions.map((t) => {
    balance += t.type === "income" ? t.amount : -t.amount;
    return {
      date: t.date,
      balance,
    };
  });
};