import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = props => {
  return (
    <div className="ui menu">
      <NavLink to="/" className="header item">Home</NavLink>
      <NavLink to="/questions" className="item">Questions</NavLink>
      <NavLink to="/instructions" className="item">Instructions</NavLink>
    </div>
  );
};