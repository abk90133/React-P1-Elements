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
        console.log(enteredUsername, enteredAge);
        // console.log(event.target.username.value);
        // console.log(event.target.Age.value);
        // These values are seen from the console of the browser
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const AgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }


    return (
        <Card className={classes.input}> 
        {/* We have wrapped the below form to the Card component to add some beautification to it */}
            <form onSubmit={addUserHandler}>
                <label htmlFor="Username" value="user">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler}/> 
                <label htmlFor="Age" value="ag">Age (Years)</label>
                <input id="Age" type="number" onChange={AgeChangeHandler}/> 
                <Button type="Submit" className="border">Add User</Button>
                {/* here the class which is applied i.e "border" to the Button is basically defined in the button.js itself */}
            </form>
            </Card>
    );
};

export default AddUser; 