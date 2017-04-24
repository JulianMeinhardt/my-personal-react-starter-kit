import React from 'react';
import { Link } from 'react-router-dom';

const HelloWorld = () => (
  <div>
    Hello World
    <Link to="/current"> to the current World </Link>
  </div>
);

export default HelloWorld;
