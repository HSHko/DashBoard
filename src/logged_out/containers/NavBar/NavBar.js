import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "@material-ui/core";
import { Hide } from "styles/theme";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import BookIcon from "@material-ui/icons/Book";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import NavAnchor from "./NavAnchor";

export default React.memo(props => {
  React.useEffect(() => console.log("Rendered NavBar.js"));

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = React.useState(false);
  const handleMobileDrawer = React.useCallback(() => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
    console.log("draw is now " + isMobileDrawerOpen);
  }, [isMobileDrawerOpen]);

  const menuItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon></HomeIcon>,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: <BookIcon></BookIcon>,
    },
    {
      name: "Register",
      icon: <HowToRegIcon></HowToRegIcon>,
    },
    {
      name: "Login",
      icon: <LockOpenIcon></LockOpenIcon>,
    },
  ];

  return (
    <>
      <Appbar>
        <Toolbar>
          <CorpLogo></CorpLogo>
          <Box>
            <Hide tmin>
              <Button onClick={handleMobileDrawer}>
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
    </>
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
