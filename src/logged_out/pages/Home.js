import React, { useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export default React.memo(props => {
  console.log("init");
  useEffect(() => {
    const getTodos = async e => {
      try {
        const res = await fetch("http://localhost:5000/todos");
        const jsonData = await res.json();
        setTodos(jsonData);
      } catch (error) {
        console.error(error.message);
      }
    };
    getTodos();
  }, []);

  const inputRef = React.useRef("Hello, World!");
  const [todos, setTodos] = React.useState([]);

  const onSubmit = async e => {
    e.preventDefault();
    const description = inputRef.current.value;
    try {
      const body = { description };
      console.log(description);
      console.log(body);
      const res = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(res);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Wrapper className="text-center">
      <h1>Home</h1>

      <form onSubmit={onSubmit}>
        <TextField
          inputRef={inputRef}
          label="FieldTitle"
          placeholder=""
          defaultValue={inputRef.current}
        />
        <Sbutton>ADD</Sbutton>
      </form>

      <h1>TODOLIST</h1>
      {todos.map(e => {
        return <div key={e.id}>{e.description}</div>;
      })}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  & > *.Mui-focused {
    color: ${p => p.theme.color.red[3]};
  }
`;

const Sbutton = styled.button`
  display: inline;
  margin-top: 1rem;
  background-color: ${p => p.theme.color.red[2]};
`;
