import React, { useContext } from "react";
import { TodoContex } from "../contex/todo_contex";
import SingleListItem from "./singleListItem";

const TodoList = () => {
    const {todos,dispatch} = useContext(TodoContex)

    const handleDone = ({id}) => {
        dispatch({
            type : "complete",
            id: id,
        })
    }

    const handleDelete = ({id}) => {
        dispatch({
            type: "delete",
             id: id,
        })
    }

    return (
            <ul>
                {todos.map((todo) => (
                    <li
                        className="list-item"
                        key={todo.id}
                    >
                        <div
                            className={`list ${todo.completed ? "complete" : ""}`}
                        >
                            {todo.text}
                        </div>
                        <div
                            className= "icons"
                        >
                            <button className="button-complete" onClick={() => handleDone(todo)}>
                                <i className="fa-solid fa-circle-check"></i>
                            </button>
                            <button className="button-delete" onClick={() => handleDelete(todo)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </li>
                ))}
            </ul> 
        
    );
};

export default TodoList