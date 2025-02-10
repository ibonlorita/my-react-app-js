import { useState } from "react";
import TodoItem from "./TodoItem";

function ToDoList() {
    const [todos, setTodos] = useState(["Learn React", "Learn JavaScript"]);
    const [newTodo, setNewTodo] = useState("");

    //新增待辦事項的函式
    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo("");
        }
    };
    //刪除待辦事項的函式
    const deleteTodo = (todoToRemove) => {
        setTodos(todos.filter((todo) => todo !== todoToRemove));
    };

    return (    
        <div>
            <h2>ToDo List</h2>
            {/* 渲染待辦事項列表 */}
            <ul>
                {todos.map((todo, index) => (
                        <TodoItem key={index} todo={todo} onDelete={deleteTodo} />
                    )
                )}
            </ul>
            {/* 輸入框: 讓用戶輸入新的待辦事項 */}
            <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            />
            {/* 新增按鈕: 點擊後執行addTodo */}
            <button onClick={addTodo}>Add Todo</button>
        </div>

    )

};

export default ToDoList;