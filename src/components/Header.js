import React from 'react';
import { Route } from 'react-router-dom';

const Header = (props) => (
  <div className="Header">
    <Route
      path="/:page"
      render={({ match }) => {
        switch (match.params.page) {
          case "step7.1":
          case "step7.2":
            return (
              <h1>{match.params.page} header</h1>
            )
          default: break;
        }
        return null;
      }}
    />
  </div>
);

export default Header;