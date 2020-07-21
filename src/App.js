import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: 'title 1'},
    {id: 2, title: 'title 2'},
    {id: 3, title: 'title 3'},
  ])
  function handleClickTodo (todo) {
    let todoIndex = todos.findIndex(x => x.id == todo.id);
    if (todoIndex < 0) return ;
    const newTodo = [...todos];
    newTodo.splice(todoIndex, 1);
    setTodos(newTodo);
  }
  return (
    <div className="App">
      <TodoList todos={todos} onClickTodo={handleClickTodo}/>
    </div>
  );
}

export default App;
