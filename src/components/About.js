import React from 'react';

const About = (props) => (
  <div>
    <h1>About</h1>
    <div>params: </div>
    <div>param1(mm-dd-yyyy): {props.match.params.param1}</div>
    <div>param2(extension eg. .html): {props.match.params.param2}</div>
  </div>
);

export default About;