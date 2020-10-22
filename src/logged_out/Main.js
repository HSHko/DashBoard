import React from "react";
import * as pages from "./pages";
import { NavBar } from "./containers";
import { Dialog } from "./containers";
import { Switch, Route } from "react-router-dom";

function Main() {
  console.log("init");
  return (
    <>
      <NavBar></NavBar>
      <Dialog></Dialog>
      <Switch>
        <Route path="/" exact component={pages.Home}></Route>
        <Route path="/blog" exact component={pages.Blog}></Route>
      </Switch>
    </>
  );
}

export default Main;
