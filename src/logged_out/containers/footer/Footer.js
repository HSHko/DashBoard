import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";

export default () => {
  return (
    <Wrapper>
      <Box mx="auto"></Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${p => p.theme.vars.footer.bgColor};
`;
