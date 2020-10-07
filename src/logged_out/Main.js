import React from "react";
import * as pages from "./pages";
import { NavBar } from "./containers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main() {
  return (
    <>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact component={pages.Home}></Route>
        <Route path="/blog" exact component={pages.Blog}></Route>
      </Switch>
    </>
  );
}

export default Main;
