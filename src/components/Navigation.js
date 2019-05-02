import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from "styletron-react";
import './Navigation.css';
const LinkSpaced = styled("span", { margin: "5px" });

const Navigation = () => {
  return (
    <div>
      <NavLink exact activeClassName="active" exact to="/" ><LinkSpaced>Home</LinkSpaced></NavLink>
      <NavLink activeClassName="active" to="/about"><LinkSpaced>About</LinkSpaced></NavLink>
      <NavLink activeClassName="active" to="/contact"><LinkSpaced>Contact</LinkSpaced></NavLink>
    </div>
  );
};

export default Navigation;