## Motivation of this tutorial:

1.  To help newbies to understand react-router v5

## CurrentStepN - Current Branch.

Step1 - 1-hello-world-with-browser-router

## StepN - Branch.

Step1 - 1-hello-world-with-browser-router

## Step1. Lets see how to use react router for hello world case

```
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // react-router for browser

const App = () => <h1>Hello World</h1>;

const Root = () => (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
);

export default Root;
```
