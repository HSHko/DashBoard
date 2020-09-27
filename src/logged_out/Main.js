import React from "react";
import styled from "styled-components";
import * as Pages from "./pages";
import NavBar from "./containers/NavBar";

function Main() {
  return (
    <MainLayout>
      <NavBar></NavBar>
      <Pages.Test></Pages.Test>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
`;

export default Main;
