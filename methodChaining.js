const transactions = [
  { amount: 100, type: "credit" },
  { amount: 20, type: "cash" },
  { amount: 150, type: "credit" },
  { amount: 50, type: "cash" },
  { amount: 75, type: "credit" }
];

const totalCreditWithBonus = transactions
    .filter((transaction) => transaction.type === "credit")
    .map(transaction => transaction.amount * 1.1)
    .reduce((total, amount) => total + amount, 0);

console.log(totalCreditWithBonus); // Output: 88.0