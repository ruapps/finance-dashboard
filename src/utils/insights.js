export const getHighestSpendingCategory = (transactions) => {
  const map = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      map[t.category] = (map[t.category] || 0) + t.amount;
    }
  });

  let maxCategory = "";
  let maxValue = 0;

  for (let key in map) {
    if (map[key] > maxValue) {
      maxValue = map[key];
      maxCategory = key;
    }
  }

  return { category: maxCategory, amount: maxValue };
};

export const getMonthlyComparison = (transactions) => {
  const currentMonth = new Date().getMonth();
  const lastMonth = currentMonth - 1;

  let currentTotal = 0;
  let lastTotal = 0;

  transactions.forEach((t) => {
    const month = new Date(t.date).getMonth();

    if (t.type === "expense") {
      if (month === currentMonth) currentTotal += t.amount;
      if (month === lastMonth) lastTotal += t.amount;
    }
  });

  const change = lastTotal
    ? ((currentTotal - lastTotal) / lastTotal) * 100
    : 0;

  return { currentTotal, lastTotal, change };
};