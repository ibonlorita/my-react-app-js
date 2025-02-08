import { useState } from "react";

function ToDoList() {
    const [todos, setTodos] = useState(["Learn React", "Learn JavaScript"]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo("");
        }
    };

    return (    
        <div>
            <h2>ToDo List</h2>
            <ul>
                
            </ul>
        </div>

    )

};

export default ToDoList;