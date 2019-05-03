import React from 'react';
import { NavLink, Route } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const Menu = () => (
  <div>
    <h3>Step8 Menu</h3>
    <NavLink style={{ margin: 10 }} activeStyle={{ color: 'blue' }} to="/step8/menu/food">Food</NavLink>
    <NavLink style={{ margin: 10 }} activeStyle={{ color: 'blue' }} to="/step8/menu/drinks">Drinks</NavLink>
    <NavLink style={{ margin: 10 }} activeStyle={{ color: 'blue' }} to="/step8/menu/sides">Sides</NavLink>
    <Route
      path="/step8/:section/:subSection"
      render={
        (props) =>
          <h3>Step8  {props.match.params.section} {props.match.params.subSection}</h3>
      }
    />
  </div>
);

const Step8 = (props) => (
  <div>
    <NavLink style={{ marginRight: 10 }} activeStyle={{ color: 'green' }} to="/step8/home">home</NavLink>
    <NavLink style={{}} activeStyle={{ color: 'green' }} to="/step8/menu" >menu</NavLink>
    <Route path="/step8/home" component={Home} />
    <Route path="/step8/menu" component={Menu} />
  </div >
);

export default Step8;