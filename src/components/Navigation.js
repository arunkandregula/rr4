import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from "styletron-react";
import Header from 'components/Header';
import Content from 'components/Content';
import './Navigation.css';

const LinkSpaced = styled("span", { margin: "5px" });

const Navigation = () => {
  return (
    <div>
      <NavLink exact activeClassName="active" to="/" ><LinkSpaced>Home</LinkSpaced></NavLink>
      <NavLink activeClassName="active" to="/about"><LinkSpaced>About</LinkSpaced></NavLink>
      <NavLink activeClassName="active" to="/contact/"><LinkSpaced>Contact</LinkSpaced></NavLink>
      <NavLink activeClassName="active" to="/step5_inline?id=123"><LinkSpaced>Step5-Inline</LinkSpaced></NavLink>
      <NavLink activeClassName="active" to={{ pathname: '/step5_object', search: 'id=123' }}><LinkSpaced>Step5-Object</LinkSpaced></NavLink>
      <NavLink activeClassName="active" to="/step7.1"><LinkSpaced>Step7.1</LinkSpaced></NavLink>
      <NavLink activeClassName="active" to="/step7.2"><LinkSpaced>Step7.2</LinkSpaced></NavLink>
      <NavLink activeClassName="active" to="/step8"><LinkSpaced>Step8</LinkSpaced></NavLink>
      <Header />
      <Content />
    </div>
  );
};

export default Navigation;