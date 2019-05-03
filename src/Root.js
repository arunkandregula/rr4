import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // react-router for browser
import Home from 'components/Home';
import About from 'components/About';
import Contact from 'components/Contact';
import Error from 'components/Error';
import Navigation from 'components/Navigation';
import Step5 from 'components/Step5';
import Step8 from 'components/Step8';

import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

// 1. Create a client engine instance
const engine = new Styletron();

const Root = () => (
  <StyletronProvider value={engine}>
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about/:param1(\d{2}-\d{2}-\d{4})?:param2(\.[A-Za-z]+)?" component={About} />
        <Route path="/contact/:name([A-Za-z]+)?:age(\d{2})?" component={Contact} />
        <Route path="/step5_inline" component={Step5} />
        <Route path="/step5_object" component={Step5} />
        <Route path="/step8" component={Step8} />
        <Route path="/:itemId" component={Home} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </StyletronProvider>
);

export default Root;