import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav id="navBar" className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="navBarItems">
    <span role="img"><a className="navbar-brand" href="/"><h2>👩🏻‍🍳</h2></a></span>
    <Link to="/recipes" href="#"><FaUtensils size="3em"/></Link>
    <Link to="/recipes/create" href="#"><FaPlus size="3em"/></Link>
  </div>
  </nav>
)

export default Header;