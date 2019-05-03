## Motivation of this tutorial:

1.  To help newbies to understand react-router v5

## CurrentStepN - Current Branch.

Step8 - 8-render-nested-routes-as-nested-components

## StepN - Branch.

Step8 - 8-render-nested-routes-as-nested-components

## Step8.

1. Entire library of React Router v4/v5 has been built as React components.
2. As each route is a react component, we can have nest those react routes as components where they appear.
3. Lets implement following routes and nested routes:

4.

```
   /step8
   /step8/home
   /step8/menu
   /step8/menu/food
   /step8/menu/drinks
   /step8/menu/sides
```

5. Things to note which we missed in previous steps:

- All

  ```
  http://localhost:3001/contact
  http://localhost:3001/contact/
  http://localhost:3001/contact/a
  ```

  matches

  ```
  <Route path="/contact/:name?" component={Contact} />
  ```

- But, only those having / after about, like

  ```
  http://localhost:3001/about/
  http://localhost:3001/about/.html
  http://localhost:3001/about/01-02-2011.html

  ```

  matches the route with 2 params

  ```
  <Route path="/about/:param1(\d{2}-\d{2}-\d{4})?:param2(\.[A-Za-z]+)?" component={About} />
  ```

- Those NOT having / after about, like

  ```
  http://localhost:3001/about

  ```

  DOESNT MATCH route with 2 params

  ```
  <Route path="/about/:param1(\d{2}-\d{2}-\d{4})?:param2(\.[A-Za-z]+)?" component={About} />
  ```

  But matches route with 1 param

  ```
  <Route path="/about/:param1(\d{2}-\d{2}-\d{4})" component={About} />
  ```

  matches

  ```

  <Route path="/about/:param1(\d{2}-\d{2}-\d{4})?:param2(\.[A-Za-z]+)?" component={About} />
  ```

  Its a point to learn. Also asked this [question](https://stackoverflow.com/questions/55964622/why-the-react-route-with-2-optional-params-not-matching-a-simple-url) in stack overflow.

-
