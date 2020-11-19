import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // react-router for browser
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



const Root = () => (
  <BrowserRouter>
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </BrowserRouter>
);

export default Root;