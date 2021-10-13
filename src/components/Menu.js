import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GiphyContext } from "../shared/GiphyContext";

export default function Menu() {
  const { user, clearState } = useContext(GiphyContext);
  return (
    <nav className="menu">
      {!user && (
        <NavLink className="link" to="/login" activeClassName="active">
          Login
        </NavLink>
      )}
      {user && (
        <>
          <NavLink className="link" to="/search" activeClassName="active">
            Search
          </NavLink>
          <NavLink className="link" to="/favorites" activeClassName="active">
            Favorites
          </NavLink>
          <button className="link" onClick={clearState}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
}
