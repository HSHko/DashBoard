import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export default React.memo(props => {
  console.log(`rendered: Home.js`);

  const [description, setDescription] = React.useState("ggHello, World!");

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const res = fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(res);
    } catch (error) {}
  };

  const handleOnChange = e => {
    setDescription(e.target.value);
  };

  return (
    <Wrapper className="text-center">
      <h1>Home</h1>

      <form onSubmit={onSubmit}>
        <TextField
          label="FieldTitle"
          placeholder=""
          defaultValue={description}
          onChange={handleOnChange}
        />
        <SButton>ADD</SButton>
      </form>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  & > *.Mui-focused {
    color: ${p => p.theme.color.red[3]};
  }
`;

const SButton = styled.button`
  display: inline;
  margin-top: 1rem;
  background-color: ${p => p.theme.color.red[2]};
`;
