import React from "react";

const todoList = ({todos, setTodos}) => {

    const changeListItem = (e) => {
        console.log(e.target.value)
        e.preventDefault();
    };

    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input
                        type= "text"
                        value={todo.title}
                        className = "list"
                        onChange={changeListItem}
                    />
                </li>                
        ))}
        </div>
    );
};
export default todoList