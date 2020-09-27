import React from 'react';
import styled from 'styled-components';
import Rerender from './Rerender';
import List from './List';

const array = ['One', 'Two', 'Three',];

export default () => {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState();

  function onClickHandler(e) {
    switch(e.target.id) {
      case "addTodo":
        e.preventDefault();
        setTodos([...todos, newTodo]);
        break;
      default: 
        break;
    }
  }

  React.useEffect( () => {
    console.log("새로운 투두리스트가 렌더링");
  }, [todos])


  return (
    <CBox>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={() => {
          setCount(x => x + 1);
        }}>
          ADD
        </button>
      </div>
      <Rerender title="This is prop title" array={array}></Rerender>

      <h2>todo 어플리케이션</h2>
      <form action="">
        <input type="text" name="" onChange={e => {
          setNewTodo(e.target.value);
        }}>
        </input>
        <button id="addTodo" onClick={onClickHandler}>할일추가</button>
      </form>

      <List todos={todos}></List>
    </CBox>
  )
}

const CBox = styled.div`

  text-align: center;
  background-color: ${props => props.theme.color.red[3]};
`;


/*
  function onChangeHandler(e) {
    switch(e.target.id) {
      case "inputTodo":
        setNewTodo(e.target.value); 
        break;
    }
  }
*/