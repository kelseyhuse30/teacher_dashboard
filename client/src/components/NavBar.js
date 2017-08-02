import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = props => {

	let logout = null;
  if (props.logged_in) {
    logout = <div className="right menu"><a className="item">{props.username}</a><a className="item" onClick={props.handleLogOut}>Logout</a></div>;
  }

  return (
    <div className="ui menu">
      <NavLink to="/" className="header item">Home</NavLink>
      <NavLink to="/questions" className="item">Questions</NavLink>
      <NavLink to="/instructions" className="item">Instructions</NavLink>
      {logout}
    </div>
  );
};