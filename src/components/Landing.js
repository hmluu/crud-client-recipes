import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="jumbotron">
    <h1 className="display-3">❤️Recipes</h1>
    <p className="lead">Welcome to my kitchen!</p>
    <hr className="my-4" />
    <p>You can CREATE, READ, UPDATE, and DELETE recipes!</p>
    <p className="lead">
      <Link to="/recipes"className="btn btn-outline-primary" href="#" role="button">View Recipes</Link>
    </p>
  </div>
);

export default Landing;