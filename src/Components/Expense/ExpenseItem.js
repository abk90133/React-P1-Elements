import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";


function Expense(props) {

    const now = new Date().toLocaleTimeString();

    // function clickHandler() {
    //     console.log("Clicked");
    // }

    const [amount, setTime] = useState(props.amount);

    const clickHandler = () => {
        // setTime("Updated");
        setTime(now);
        console.log("Clicked");
    } 

    return( 
        <div className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{amount}</div>
        <button onClick={clickHandler}>Click Me!</button>
        </div>
        </div>
    );

}

export default Expense;