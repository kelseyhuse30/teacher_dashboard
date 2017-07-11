import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = props => {
  return (
    <div className="ui menu">
      <NavLink to="/" className="header item">Home</NavLink>
      <NavLink to="/about" className="item">About</NavLink>
      <NavLink to="/help" className="item">Help</NavLink>
    </div>
  );
};