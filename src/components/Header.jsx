import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header slide">
    <Link to="/" className="logo">Thomas Delli Antoni</Link>
    <Link to="/about">About</Link>
  </div>
);

export default Header;
