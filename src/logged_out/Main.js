import React from "react";
import styled from "styled-components";
import * as Pages from "./pages";
import { NavBar } from "./containers";

function Main() {
  return (
    <MainLayout>
      <NavBar></NavBar>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Main;
