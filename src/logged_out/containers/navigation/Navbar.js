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
  React.useEffect(() => {
    console.log("rendered: Navbar.js");
  }, []);

  const dispatch = useDispatch();

  return (
    <nav>
      <Wrapper>
        <Toolbar>
          <CorpLogo></CorpLogo>
          <Box>
            <Hide tmin>
              <Button onClick={() => dispatch(sideAnchors.hi())}>
                <MenuIcon style={{ color: "white" }} size="large"></MenuIcon>
              </Button>
            </Hide>
            <Hide mmax>
              {menuItems.map((e, idx) =>
                e.link ? (
                  <Link key={e.name} to={e.link}>
                    <Button color="secondary" size="large">
                      {e.name}
                    </Button>
                  </Link>
                ) : (
                  <Button color="secondary" size="large">
                    {e.name}
                  </Button>
                ),
              )}
            </Hide>
          </Box>
        </Toolbar>
      </Wrapper>
      <Hide tmin>
        <NavAnchor></NavAnchor>
      </Hide>
    </nav>
  );
});

const Wrapper = styled.div`
  z-index: ${p => p.theme.vars.header.zIndex};
  position: sticky;
  background-color: ${p => p.theme.palette.test[0]};
`;

const Toolbar = styled.div`
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
