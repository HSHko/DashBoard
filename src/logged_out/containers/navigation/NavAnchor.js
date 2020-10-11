import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sideAnchors } from "store";
import { menuItems } from "./menuItems";
import styled, { css } from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";

export default props => {
  React.useEffect(() => {
    console.log("rendered: NavAnchor.js");
    console.log("sideAnchor is now: " + storesideAnchor.isHi);
  });
  const storesideAnchor = useSelector(x => x.sideAnchor);
  const dispatch = useDispatch();

  return (
    <Wrapper active={storesideAnchor.isHi}>
      <Toolbar className="Head">
        <button className="Hover" onClick={() => dispatch(sideAnchors.lo())}>
          <CloseIcon color="primary"></CloseIcon>
          <h5>CLOSE</h5>
        </button>
      </Toolbar>
      <Toolbar className="List">
        {menuItems.map((e, idx) => {
          return e.link ? (
            <Link className="Hover" key={e.name} to={e.link}>
              <AddToHomeScreenIcon size="large"></AddToHomeScreenIcon>
              <h6>{e.name}</h6>
            </Link>
          ) : (
            <button className="Hover">
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
    height: ${p => p.theme.vars.header.height};
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
