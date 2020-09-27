import React from "react";
import styled from "styled-components";
import * as MU from "@material-ui/core";

const menuItems = [
  {
    link: "/",
    name: "Home",
  },
];

function main() {
  return (
    <HeaderWrapper>
      <SAppBar>
        <SToolbar>
          <div>Hello HELLO</div>
        </SToolbar>
      </SAppBar>
    </HeaderWrapper>
  );
}

export default main;

const HeaderWrapper = styled.div`
  z-index: ${props => props.theme.headerVals.zIndex};
  width: 100%;
  background-color: ${props => props.theme.color.blue[2]};
`;

const SAppBar = styled(MU.AppBar)`
  position: static;
  width: 90vh;
  max-width: ${props => props.theme.deviceSize.Max};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${props => props.theme.breakpoints.Tablet} {
  }
`;

const SToolbar = styled(MU.Toolbar)`
  background-color: ${props => props.theme.color.lightblue[6]};
  box-shadow: 0.1rem 0.2rem ${props => props.theme.color.red[5]};
`;
