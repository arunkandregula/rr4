import React from 'react';
import { Route } from 'react-router-dom';
import './Content.css';

const Content = (props) => (
  <div className="Content">
    <Route
      path="/:page"
      render={({ match }) => {
        switch (match.params.page) {
          case "step7.1":
          case "step7.2":
            return (
              <p>{match.params.page} Content</p>
            )
          default: break;
        }
        return null;
      }}
    />
  </div>
);

export default Content;