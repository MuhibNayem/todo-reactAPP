import React from 'react';

import './App.css';
import Header from './components/common';

import InputListItem from './components/todoInput';
import TodoList from './components/todoList';
import { TodoProvider } from './components/contex/todo_contex';

const App = () => {

  
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <TodoProvider>
          <div>
            <InputListItem />
          </div>
          
          <div>
            <TodoList />
          </div>
        </TodoProvider>
      </div>
    </div>
  );
}

export default App;
