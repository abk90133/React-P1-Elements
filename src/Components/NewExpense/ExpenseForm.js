import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm () {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //here we haev a single useState for the multiple inputs
    // const[userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    //     setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });
    // Below is best Approach
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value};
    // });
    };
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value};
        // });
    };
    
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value};
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        console.log(expenseData);
        //we are calling the whole expenseData object here
    };

    return ( 
        <form onSubmit={submitHandler}>
        <div className="new-expense__control">
            <div className="new-expense__control">
            <label>Title</label>
            <input type="text" alt="title" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" alt="amount" min="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
            <label>Date</label>
            <input type="date" alt="date" min="2019-01-01" max="2023-12-30" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            </div>
        </div>
        </form>
    );
};

export default ExpenseForm;

