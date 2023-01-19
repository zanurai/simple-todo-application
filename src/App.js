import React, { useState } from "react";
import "./index.css"




const App = () => {
    const [userInput, setUserInput] = useState(" ");
    const [todos, setTodo] = useState([]);



    const addData = () => {
        setTodo([...todos, userInput]);


    }


    function handleDelete(userInput) {
        const removeItem = todos.filter((todos) => {
            return todos.userInput !== userInput
        });
        setTodo(removeItem);

    }

    const mystyle = {
        color: "white",
        fontSize: "40px",

    }

    const myStyle = {

        height: "30px",
        borderRadius: "10px",
    }
    /*const myAdd = {

        height: "30px",
    }
    const myRemove = {

        height: "30px",
    }*/

    return (<div>
        <h1 style={mystyle}>ToDo Application</h1>
        <input style={myStyle} onChange={(event) => setUserInput([event.target.value])} type="text" />
        <button className="btn1" onClick={() => addData()}>Add</button>
        <button className="btn2" onClick={() => handleDelete()}>Delete</button>
        <ul>
            {
                todos.map((todo, index) => <li key={index}>{todo}</li>)
            }
        </ul>
    </div>)
}

export default App;
