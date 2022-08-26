import React,{useReducer} from "react";
import Reducer from "../../reducer/reducer";

export const TodoContex = React.createContext()

export const TodoProvider = (props) => {
    const [todos, dispatch] = useReducer(Reducer,[])
    return (
        <TodoContex.Provider value={{todos, dispatch}}>
            {props.children}
        </TodoContex.Provider>
    )
}

