import React from 'react';
import { Link } from 'react-router-dom';

const HelloCurrentWorld = () => (
  <div>
      Hello World
      <span>{new Date().toString()}</span>
    <Link to="/"> Back to basics </Link>
  </div>
);

export default HelloCurrentWorld;
