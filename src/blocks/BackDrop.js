import React from "react";
import styled from "styled-components";
// import { useSelector, useDispatch } from "react-redux";

export default props => {
  console.log("init");

  // const dispatch = useDispatch();

  return <Drop></Drop>;
};

const Drop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  transition: all 500ms;
  background-color: ${p => p.theme.color.black};
`;
