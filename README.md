## Motivation of this tutorial:

1.  To help newbies to understand react-router v5

## CurrentStepN - Current Branch.

Step2 - 2-env-file-and-exact-keyword

## StepN - Branch.

Step2 - 2-env-file-and-exact-keyword

## Step2. 2 separate learnings

1. Lets see how to use [absolute path imports](https://medium.com/@ktruong008/absolute-imports-with-create-react-app-4338fbca7e3d) with create-react-app.

- Create.env file

  ```
  NODE_PATH='src/'
  ```

  Thats it.
  We can happily import using aboslute import paths.
  Eg.

  ```
  import Home from 'components/Home';
  import About from 'components/About';
  import Contact from 'components/Contact';

  ```

2. We learned importance of "exact" keyword while defining the route.
