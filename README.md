## Motivation of this tutorial:

1.  To help newbies to understand react-router v5

## CurrentStepN - Current Branch.

Step5 - 5-parse-query-params

## StepN - Branch.

Step5 - 5-parse-query-params

## Step5.

1. Value of the property, "to", can be a string or an object.

```
      <NavLink to="/step5_inline?id=123" ...>...</NavLink>
      <NavLink to={{ pathname: 'step5_object', search: 'id=123' }}>...</NavLink>
```

2. Value of the query string can be accessed using props.location.search

```
<div>{JSON.stringify(props.location)}</div>
```

will display

```
{"pathname":"/step5_object","search":"?id=123","hash":"","key":"4bpcte"}
```

React router will put "?" for us for

```
<NavLink to={{ pathname: 'step5_object', search: 'id=123' }}>...</NavLink>
```

in

```
"search":"?id=123"
```

But it will not do any parsing.

3. There are number of npm packages to parse query strings for us.
   Lets use a new web standard to do that.
   URLSearchParams is a new Web API, we can use to retrieve params from the query string.
