import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import styled from 'styled-components';
import Rerender from './Rerender';
import List from './List';

const array = ['One', 'Two', 'Three',];

export default () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const str = "This is prop title";
  
  function changeInputData(e) {
    setNewTodo(e.target.value);
  }

  function addTodo(e) {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }

  useEffect( () => {
    console.log("새로운 내용이 렌더링");
  }, [todos])


  return (
    <ClassBox>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={() => {
          setCount(count + 1);
        }}>
          ADD
        </button>
      </div>
      <Rerender title={str} array={array}></Rerender>

      <h2>todo 어플리케이션</h2>
      <form action="">
        <input type="text" name="" onChange={changeInputData}></input>
        <button onClick={addTodo}>할일추가</button>
      </form>

      <List todos={todos}></List>
    </ClassBox>
  )
}


const ClassBox = styled.div`

  text-align: center;
`;