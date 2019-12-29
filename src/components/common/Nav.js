import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <h1 className="brand">
        <NavLink exact activeClassName="selected" to="/">
          Central Perk
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink exact activeClassName="selected" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="selected" to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
