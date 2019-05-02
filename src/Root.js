import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // react-router for browser

const App = () => <h1>Hello World</h1>;

const Root = () => (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
);

export default Root;