import React, { useState } from 'react';
// import Expense from "./Components/Expense/ExpenseItem";
// import expenses from "./Components/Expense/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expense/Expenses";

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


  const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expenses) => {
      // console.log("In App.js");
      // console.log(expense);
      setExpenses((prevExpenses)=> {
        return[expenses, ...prevExpenses];
      });
    };

  
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      {/* <Expense date= {expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}/>
      <Expense date= {expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}/> */}
      <Expenses items={expenses}/>
    </div>
  );
};

export default App;
