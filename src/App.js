import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Mobile Recharge",
      amount: 90,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Collage fee",
      amount: 700,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Bike Insurance",
      amount: 294,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Electricity   Bill",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Lets get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
