import React from "react";
import Expense from "./Components/ExpenseItem";
import expenses from "./Components/Expenses";

function App() {

  
  return (
    <div>
      <h2>Let's get started!</h2>
      <span>Something we can write!</span>
      <Expense date= {expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}/>
      <Expense date= {expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}/>
    </div>
  );
}

export default App;
