import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import BookIcon from "@material-ui/icons/Book";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";

export const menuItems = [
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
    label: "login",
    icon: <LockOpenIcon></LockOpenIcon>,
  },
];
