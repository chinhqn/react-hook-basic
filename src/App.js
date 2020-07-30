import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/todoForm';
import PostList from './components/postList';
import Pagination from './components/pagination';
import queryString from 'query-string';
function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: 'title 1'},
    {id: 2, title: 'title 2'},
    {id: 3, title: 'title 3'},
  ])
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 1
  })
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1
  })
  function handleClickTodo (todo) {
    let todoIndex = todos.findIndex(x => x.id == todo.id);
    if (todoIndex < 0) return ;
    const newTodo = [...todos];
    newTodo.splice(todoIndex, 1);
    setTodos(newTodo);
  }
  function handleChangeSubmit(value) {
    console.log(value, 'ppppp');
    if (value) {
      const newTodos = [...todos];
      const todosNew = {
        id : newTodos.length + 1,
        ...value
      }
      newTodos.push(todosNew);
      setTodos(newTodos);
    }
    
  }
  function handleNewPageChange (newPage) {
    console.log(newPage, 'newPage');
    setFilter({
      ...filter,
      _page: newPage
    })
  }
  useEffect(() => {
    console.log('useefff');
    
    async function fetchPostList() {
      // ...
      try {
        // _limit=10&_page=1
        const paramStr = queryString.stringify(filter);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramStr}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }
    }
    fetchPostList();
  }, [filter])
  
  useEffect(() => {
    console.log('use2');
  })
  
  return (
    <div className="App">
      <PostList postList={postList} />
      <Pagination pagination={pagination} 
        onPageChange={handleNewPageChange}
      />
      {/* <TodoForm onSubmit={handleChangeSubmit} />
      <TodoList todos={todos} onClickTodo={handleClickTodo}/> */}
    </div>
  );
}

export default App;
