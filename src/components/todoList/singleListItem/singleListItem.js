import React from "react"

const  SingleListItem = ({todo,setTodos,todos}) => {
    const title = todo.title
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
        <li
            className="list-item"
            key={todo.id}
        >
            <div
                className={`list ${todo.completed ? "complete" : ""}`}
            >
                {title}
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
    );
}

export default SingleListItem