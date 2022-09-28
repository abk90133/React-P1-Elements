import React, { useState } from "react";

import Card from '../UI/Card';

import Button from '../UI/Button';

import classes from "./AddUser.module.css"
//this is basically used to target a subclass in a class applied to it


const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const addUserHandler = (event) => {
        event.preventDefault();
        //applied the IF condition here to check for the values in the block is empty or not, if empty, then not allow it to proceed
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        } if(+enteredAge < 1) {
            // here the +means that it will only take the Number on it
            return;
            //here the Return means that it will not allow the further lines od code to execute. It will stop the execution here itself
        }
        props.onAddUser={enteredUsername, enteredAge};
        // console.log(enteredUsername, enteredAge);
        // console.log(event.target.username.value);
        // console.log(event.target.Age.value);
        // These values are seen from the console of the browser
        setEnteredAge('');
        setEnteredUsername('');
        //this is the effective use of the useState, this is taught in Sec-8/94 to remove the values we have enetered into the form after
        // fetching it
    }

    const usernameChangeHandler = (event) => {
        // setEnteredUsername(event.target.value);
        const result = event.target.value.replace(/[^a-z]/gi, '');
        setEnteredUsername(result);
    }

    const AgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }


    return (
        <Card className={classes.input}> 
        {/* We have wrapped the below form to the Card component to add some beautification to it */}
            <form onSubmit={addUserHandler}>
                <label htmlFor="Username" value="user">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/> 
                <label htmlFor="Age" value="ag">Age (Years)</label>
                <input id="Age" type="number" value={enteredAge} onChange={AgeChangeHandler}/> 
                {/* here the value={enteredAge} is used to fetch the value entered in it and then to do some changes to this input */}
                <Button type="Submit" className="border">Add User</Button>
                {/* here the class which is applied i.e "border" to the Button is basically defined in the button.js itself */}
            </form>
            </Card>
    );
};

export default AddUser; 