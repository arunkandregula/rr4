import React from 'react';

const Step5 = (props) => (
  <div>
    <h1>Step5</h1>
    <p>{JSON.stringify(props.match)}</p>
    <p>{JSON.stringify(props.location)}</p>
    <p>{new URLSearchParams(props.location.search).get('id')}</p>
  </div>
);

export default Step5;