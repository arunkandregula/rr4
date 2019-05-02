## Motivation of this tutorial:

1.  To help newbies to understand react-router v5

## CurrentStepN - Current Branch.

Step7 - 7-render-routes-as-components-within-components

## StepN - Branch.

Step7 - 7-render-routes-as-components-within-components

## Step6.

0. Route is a component in react rouiter v4.

1. Main difference between react-router-3 and react-router-4+ is that React Router v4/v5 allows us to render routes as components where ever we like in our components.

1. This allows components to render themselves dynamically based on the route the application is on.

- Navigation will always display Header component.
- But Header comp will render itself only for "/step7.1" and "/step7.2" routes. For other routes, it wont render.
- Basically, every component can check the route it is on and render differently for each route by using the Route comp inside itself.
