import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import ListItem from './components/add_list_item';
import TodoList from './components/todoList';

const App = () => {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <ListItem 
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
          />
        </div>
        <div>
          <TodoList todos = {todos} setTodos = {setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
