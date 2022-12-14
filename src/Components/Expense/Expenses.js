import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No Expenses Found</p>;

  if(filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((expense) => (
      <ExpenseItem
      key = {expense.id}  
      title = {expense.title}
      amount = {expense.amount}
      date= {expense.date}
      />
      ));
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;