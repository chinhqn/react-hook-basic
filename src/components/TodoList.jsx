import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos: PropTypes.array,
  onClickTodo: PropTypes.func,
};
TodoList.defaultProps = {
  todos: [],
  onClickTodo: null,
}

function TodoList(props) {
  const {todos, onClickTodo} = props;
  console.log(todos, 'props');
  function handleClick(todo){
    if (onClickTodo) {
      onClickTodo(todo);
    }
  }
  return (
    <ul>
      {
        todos.map(item => (
          <li 
            key={item.id}
            onClick={() => handleClick(item)}
          >
            {item.title}
          </li>
        ))
      }
    </ul>
  );
}

export default TodoList;