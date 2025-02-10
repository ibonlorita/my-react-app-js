function TodoItem({ todo, onDelete }) {
    return (   
        <li>
            {/* 顯示待辦事項 */}
            {todo}
            <button onClick={() => onDelete(todo)}>Delete</button>
        </li>

    );
};

export default TodoItem;