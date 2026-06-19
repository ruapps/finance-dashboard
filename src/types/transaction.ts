export interface Transaction {
  id: number;

  amount: number;

  category: string;

  type: "income" | "expense";

  date: string;
}
