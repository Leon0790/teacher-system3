import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>My Dashboard</h2>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </div>
  );
}

export default Sidebar;
