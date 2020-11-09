import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px', background: '#1b7531' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/garden"
      >
        Garden
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/harvest"
      >
        Harvest
      </NavLink>
    </div>
  );
}

export default NavBar;