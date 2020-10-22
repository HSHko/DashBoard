import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sideAnchors, dialogs } from "store";
import { menuItems } from "./menuItems";
import styled, { css } from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";

export default props => {
  console.log("init");

  const dispatch = useDispatch();
  const storeSideAnchor = useSelector(x => x.sideAnchor);
  const handleOnClick = React.useCallback(
    e => () => {
      dispatch(sideAnchors.lo());
      if (e.label === "login") {
        dispatch(dialogs.hi("login"));
      }
    },
    [dispatch],
  );

  return (
    <Wrapper active={storeSideAnchor.isHi}>
      <Toolbar className="Head">
        <button onClick={() => dispatch(sideAnchors.lo())}>
          <CloseIcon color="primary"></CloseIcon>
          <h5>CLOSE</h5>
        </button>
      </Toolbar>
      <Toolbar className="List">
        {menuItems.map((e, idx) => {
          return e.link ? (
            <Link key={e.name} to={e.link}>
              <AddToHomeScreenIcon size="large"></AddToHomeScreenIcon>
              <h6>{e.name}</h6>
            </Link>
          ) : (
            <button key={e.name} onClick={handleOnClick(e)}>
              <AddToHomeScreenIcon size="large"></AddToHomeScreenIcon>
              <h6>{e.name}</h6>
            </button>
          );
        })}
      </Toolbar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: ${p => p.theme.vars.sidebar.zIndex};
  position: fixed;
  width: 12rem;
  max-width: 40vh;
  height: 100vh;
  top: 0;
  background-color: ${p => p.theme.palette.primary.lv[5]};
  ${p =>
    p.active === false
      ? css`
          right: -100%;
          transition: 250ms;
        `
      : css`
          right: 0;
          transition: 250ms;
        `}
`;

const Toolbar = styled.div`
  &.Head {
    height: ${p => p.theme.vars.navbar.height};
    background-color: ${p => p.theme.palette.primary.lv[4]};
    display: flex;
    align-items: center;
  }

  &.List {
    display: flex;
    flex-direction: column;
  }

  & > a,
  button {
    width: 80%;
    margin: 0.5rem auto;
  }

  & > a:hover,
  button:hover {
    background-color: ${p => p.theme.palette.test[1]};
  }
`;
