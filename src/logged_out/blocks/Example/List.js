import React from 'react';

export default ({todos}) => {

  const todoList = todos.map((x, idx)=> <li key={idx}>{x}</li>);

  return (
    <ul>
      {todoList}
    </ul>
  )
};