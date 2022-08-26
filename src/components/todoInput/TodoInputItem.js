import React, { useContext, useState } from "react";
import { TodoContex } from "../contex/todo_contex";
import { v4 as uuidv4 } from "uuid";

const TodoInputItem = () => {

    const [input , setInput] = useState("")
    const {dispatch} = useContext(TodoContex)

    const escapeKey = 27
    const enterKey = 13
    const onInputChange = (event) => {
        setInput(event.target.value);
        
    };

    const onSubmitTodo = (e) => {
        e.preventDefault();
        dispatch({
            type: "add-todo",
            id: uuidv4(),
            text: input,
            completed: false
        })
        setInput("")
    };

    function handleKeyUp (event) {
        if (event.keyCode === escapeKey){
            setInput("")
            event.target.blur();
        }else if(event.keyCode === enterKey){
            setInput("")
            event.target.blur();
        }
    };

    return (
        <form onSubmit={onSubmitTodo}>
            <input 
                type = "text" 
                placeholder="Write to-do...."  
                value={input}
                required
                onChange={onInputChange}
                onKeyUp = {handleKeyUp}
                className = "task-input"
                
            />
            <button className="button-add" type="submit">Add</button>
        </form>
    )
}
export default TodoInputItem