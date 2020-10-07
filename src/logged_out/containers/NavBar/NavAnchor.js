import React from "react";
import styled from "styled-components";
import { mobileDrawers } from "store";
import { useSelector } from "react-redux";

export default props => {
  React.useEffect(() => console.log("Rendered NavAnchor.js"));
  const storeMobileDrawer = useSelector(x => x.mobileDrawer);
  return <>{storeMobileDrawer ? <Wrapper></Wrapper> : null}</>;
};

const Wrapper = styled.div`
  width: 250px;
`;
