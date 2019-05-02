## Motivation of this tutorial:

1.  To help newbies to understand react-router v5

## CurrentStepN - Current Branch.

Step6 - 6-conditionally-render-route-using-switch

## StepN - Branch.

Step6 - 6-conditionally-render-route-using-switch

## Step6. We will learn why should we use <Switch>

1. When we want params at / level.
   say, http://localhost:3000/:ItemId

   It matched both

   ```
    <Route path="/about" />
   ```

   and

   ```
    <Route path="/:itemId" />
   ```

   In order to fix this to one route, we need to use

   ```
   <Switch>
     <Route path="/about" />
     <Route path="/:itemId" />
   </Switch>
   ```
