import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ListItem = ({input, setInput, todos, setTodos}) => {

    let [isHovering, setIsHovering] = useState(false)

    function handleMouseEntrance(e)  {
        setIsHovering(true)
    };

    function handleMouseLeave(e)  {
            setIsHovering(false)
    };

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onSubmitTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
        setInput("")
        handleKeyUp(e)
        
    };

    function handleKeyUp (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          event.target.blur();
        } else if (event.keyCode === 27){
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
                // className = "task-input"
                onMouseEnter = {handleMouseEntrance}
                onMouseLeave = {handleMouseLeave}
                className={`task-input ${ isHovering ? "task-input-focus" : ""}`}
                
            />
            <button className="button-add" type="submit">Add</button>
        </form>
    )
}
export default ListItem