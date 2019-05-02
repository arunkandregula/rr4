import React from 'react';

const Contact = (props) => (
  <div>
    <h1>Contact</h1>
    <div>param: {props.match.params.name}</div>
  </div>
);

export default Contact;