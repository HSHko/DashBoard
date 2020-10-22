import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LoginDialog from "./LoginDialog";
import { BackDrop } from "styles/theme";
import { dialogs } from "store";

export default props => {
  console.log("init");
  const dispatch = useDispatch();

  const storeDialog = useSelector(x => x.dialog);

  const dialogOpen = React.useCallback(() => {
    if (storeDialog.isHi && storeDialog.trgt !== "") {
      if (storeDialog.trgt === "login") {
        return <LoginDialog></LoginDialog>;
      }
    }
  }, [storeDialog]);

  return (
    <React.Fragment>
      {storeDialog.isHi ? <BackDrop onClick={() => dispatch(dialogs.lo())}></BackDrop> : null}
      {dialogOpen()}
    </React.Fragment>
  );
};
