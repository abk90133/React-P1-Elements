import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm (props) {

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
    //here the .target.value is the thing that that we will be getting on the console
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
        //we are calling the whole expenseData object here
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        
    };

    return ( 
        <form onSubmit={submitHandler}>
        <div className="new-expense__control">
            <div className="new-expense__control">
            <label>Title</label>
            <input type="text" alt="title" value={enteredTitle}
            //part of lecture 58, this value thing
            onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" alt="amount" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
            <label>Date</label>
            <input type="date" alt="date" min="2019-01-01" max="2023-12-30" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            </div>
        </div>
        </form>
    );
};

export default ExpenseForm;

