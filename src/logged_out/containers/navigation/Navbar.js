import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Hide } from "styles/theme";
import { menuItems } from "./menuItems";
import NavAnchor from "./NavAnchor";
import { Box, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch } from "react-redux";
import { sideAnchors } from "store";

export default React.memo(props => {
  console.log("rendered: Navbar.js");

  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <AppBar>
          <CorpLogo></CorpLogo>
          <Box>
            <Hide tmin>
              <button onClick={() => dispatch(sideAnchors.hi())}>
                <MenuIcon style={{ color: "white" }} size="large"></MenuIcon>
              </button>
            </Hide>
            <Hide mmax>
              <ToolBar>
                {menuItems.map((e, idx) =>
                  e.link ? (
                    <Link className="navButton" key={e.name} to={e.link}>
                      {e.name}
                    </Link>
                  ) : (
                    <button className="navButton" key={e.name}>
                      {e.name}
                    </button>
                  ),
                )}
              </ToolBar>
            </Hide>
          </Box>
        </AppBar>
      </Wrapper>
      <Hide tmin>
        <NavAnchor></NavAnchor>
      </Hide>
    </>
  );
});

const Wrapper = styled.div`
  z-index: ${p => p.theme.vars.header.zIndex};
  position: sticky;
  background-color: ${p => p.theme.palette.test[0]};
`;

const AppBar = styled.div`
  width: 90%;
  height: ${p => p.theme.vars.header.height};
  max-width: ${p => p.theme.deviceSize.laptop.max};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.palette.primary.main};
`;

const CorpLogo = styled.div`
  background-color: ${p => p.theme.palette.test[2]};
  &::after {
    text-align: center;
    content: "Logo Area";
  }
`;

const ToolBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > a,
  button {
  }
`;
