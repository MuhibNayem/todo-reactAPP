import React from 'react';
import { Container, AppWrapper } from './appStyled';
import Header from './components/common';
import InputListItem from './components/todoInput';
import TodoList from './components/todoList';
import { TodoProvider } from './components/contex/todo_contex';

const App = () => {

  
  return (
    <Container>
    <AppWrapper>
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
    </AppWrapper>
    </Container>

  );
}

export default App;
