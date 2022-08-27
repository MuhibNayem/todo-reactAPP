import React, { useContext } from "react";
import { TodoContex } from "../contex/todo_contex";
import { Icons, Li, List, Ul, ButtonComplete, ButtonDelete } from "./todoListStyled";

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
            <Ul>
                {todos.map((todo) => (
                    <Li
                        key={todo.id}
                    >
                        <List
                            key = {todo.id}
                            completed = {todo.completed}
                            //  className={`list ${todo.completed ? "complete" : ""}`}
                        >
                            {todo.text}
                        </List>
                        <Icons
                            className= "icons"
                        >
                            <ButtonComplete completed = {todo.completed} onClick={() => handleDone(todo)}>
                                <i className="fa-solid fa-circle-check"></i>
                            </ButtonComplete>
                            <ButtonDelete onClick={() => handleDelete(todo)}>
                                <i className="fa-solid fa-trash"></i>
                            </ButtonDelete>
                        </Icons>
                    </Li>
                ))}
            </Ul> 
        
    );
};

export default TodoList