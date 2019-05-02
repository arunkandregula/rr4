import React from 'react';

const Home = (props) => (
  <div>
    <h1>Home</h1>
    <p>param itemId:
      {props.match.params.itemId}
    </p>
  </div >
);

export default Home;