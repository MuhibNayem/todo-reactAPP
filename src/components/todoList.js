import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";

const  SingleListItem = ({todo,setTodos,todos}) => {
    let [isHovering, setIsHovering] = useState(false)

    function handleMouseEntrance(e)  {
        setIsHovering(true)
    };

    function handleMouseLeave(e)  {
            setIsHovering(false)
    };

    const handleDone = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {...item, completed: !item.completed}
                }
                return item
            })
        )
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return(
        <ListItem
            key={todo.id}
            onMouseOver={handleMouseEntrance}
            onMouseOut = {handleMouseLeave}
            className=
            {`list-item ${ isHovering ? "list-item-focus" : ""}`}
            
        >
            <ListItemText
                primary = {todo.title}
                className={`list ${todo.completed ? "complete" : ""}`}
            />
            <ListItemSecondaryAction
                onMouseOver={handleMouseEntrance}
                onMouseOut = {handleMouseLeave} 
                className= {`${ isHovering ? "" : "listItemSecondaryAction-hidden"}`}
            >
                <button className="button-complete" onClick={() => handleDone(todo)}>
                    <i className="fa-solid fa-circle-check"></i>
                </button>
                <button className="button-delete" onClick={() => handleDelete(todo)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

const TodoList = ({todos, setTodos}) => {

    return (
        <div>        
            <List>
                {todos.map(todo => {
                    return <SingleListItem todo = {todo} setTodos={setTodos} todos = {todos}/>;
                })}
            </List> 
        </div>
    );
};

export default TodoList