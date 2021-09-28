import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu(props) {
  return (
    <nav className="menu">
      <NavLink className="link" to="/login" activeClassName="active">
        Login
      </NavLink>
      <NavLink className="link" to="/search" activeClassName="active">
        Search
      </NavLink>
      <NavLink className="link" to="/favorites" activeClassName="active">
        Favorites
      </NavLink>
    </nav>
  );
}
