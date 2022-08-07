import React,{useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import clases from "../UI/Card.module.css"

const AddUser = () => {
const[enteredUsername,setEnteredUsername]=useState("");
const[enteredAge,setEnteredAge]=useState("");

const usernameChangeHandler = (event) => {
  setEnteredUsername(event.target.value);
}
const userAgeHandler = (event) => {
  setEnteredAge(event.target.value);
}

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if(enteredAge<1) {
      return;
    }
    console.log(enteredUsername,enteredAge)
    setEnteredUsername("");
    setEnteredAge("");
  }
  return (
    <Card className={clases.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={userAgeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;
