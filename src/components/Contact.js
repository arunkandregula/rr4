import React from 'react';

const Contact = (props) => (
  <div>
    <h1>Contact</h1>
    {
      props.match.params && <div>
        <p>param name: {JSON.stringify(props.match)}</p>
        <p>param age: {props.match.params.age}</p>
      </div>
    }
    <div>param: {props.match.params.name}</div>
  </div>
);

export default Contact;