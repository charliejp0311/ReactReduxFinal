import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navBar'>
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