import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Hide } from "styles/theme";
import { menuItems } from "./menuItems";
import NavAnchor from "./NavAnchor";
import { Box, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch } from "react-redux";
import { mobileDrawers } from "store";

export default React.memo(props => {
  React.useEffect(() => {
    console.log("Rendered NavBar.js");
  });

  const dispatch = useDispatch();

  const handleMobileDrawerOn = () => {
    dispatch(mobileDrawers.hi());
  };

  return (
    <nav>
      <Appbar>
        <Toolbar>
          <CorpLogo></CorpLogo>
          <Box>
            <Hide tmin>
              <Button onClick={handleMobileDrawerOn}>
                <MenuIcon color="primary" size="large"></MenuIcon>
              </Button>
            </Hide>
            <Hide mmax>
              {menuItems.map((e, idx) => {
                if (e.link) {
                  return (
                    <Link key={e.name} to={e.link}>
                      <Button color="secondary" size="large">
                        {e.name}
                      </Button>
                    </Link>
                  );
                }
              })}
            </Hide>
          </Box>
        </Toolbar>
      </Appbar>
      <Hide mmax>
        <NavAnchor></NavAnchor>
      </Hide>
    </nav>
  );
});

const Appbar = styled.div`
  z-index: ${p => p.theme.vars.header.zIndex};
  position: sticky;
  background-color: ${p => p.theme.color.gray[0]};
  box-shadow: 0 0.2rem ${p => p.theme.color.red[5]};
`;

const Toolbar = styled.div`
  width: 90%;
  max-width: ${p => p.theme.deviceSize.laptop.max};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.color.lime[0]};
`;

const CorpLogo = styled.div`
  background-color: ${p => p.theme.color.cyan[0]};
  &::after {
    text-align: center;
    content: "Logo Area";
  }
`;
