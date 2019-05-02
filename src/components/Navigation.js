import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from "styletron-react";

const LinkSpaced = styled("span", { margin: "5px" });

const Navigation = () => {
  return (
    <div>
      <NavLink to="/" ><LinkSpaced>Home</LinkSpaced></NavLink>
      <NavLink to="/about"><LinkSpaced>About</LinkSpaced></NavLink>
      <NavLink to="/contact"><LinkSpaced>Contact</LinkSpaced></NavLink>
    </div>
  );
};

export default Navigation;