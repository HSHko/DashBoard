import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

export default props => {
  console.log("init");

  // const dispatch = useDispatch();
  // const storeDialog = useSelector(x => x.dialog);

  return (
    <Wrapper>
      <Header>Login</Header>
      <Content>
        <h4>Modal</h4>
        <p>Modal content is here</p>
      </Content>
      <CloseBtn>X</CloseBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Header = styled.div``;
const Content = styled.div``;
const CloseBtn = styled.button``;
