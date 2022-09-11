import React from "react";
import Expense from "./Components/Expense/ExpenseItem";
import expenses from "./Components/Expense/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {

  
  return (
    <div>
      <NewExpense />
      <Expense date= {expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}/>
      <Expense date= {expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}/>
    </div>
  );
}

export default App;
