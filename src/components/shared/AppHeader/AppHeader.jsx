import React from 'react';
import { NavLink } from 'react-router-dom';

import './AppHeader.scss';

const AppHeader = () => (
  <div className="app-header">
    <ul className="raw not-mobile">
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
    <div className="burger-menu mobile">
      <h2>Burger Menu</h2>
    </div>
  </div>
);

export default AppHeader;
