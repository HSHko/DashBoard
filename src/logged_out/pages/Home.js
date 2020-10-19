import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export default React.memo(props => {
  console.log(`rendered: Home.js`);

  const [description, setDescription] = React.useState("Hello, World!");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {}
  };

  const handleOnChange = e => {
    setDescription(e.currentTarget.value);
  };

  return (
    <Wrapper className="text-center">
      <h1>Home</h1>

      <form>
        <input type="text" value={description} onChange={handleOnChange} />
        <TextField label="FieldTitle" placeholder="placeholder" />
      </form>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  & > *.Mui-focused {
    color: ${p => p.theme.color.red[3]};
  }
`;
