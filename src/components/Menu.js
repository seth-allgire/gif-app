import React from "react";
import { NavLink } from "react-router-dom";
import {
  CLEAR_FAVORITES,
  CLEAR_USER,
  CLEAR_SEARCH,
} from "../shared/rootReducer";

export default function Menu({ dispatch, user }) {
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
          <NavLink
            onClick={() => {
              dispatch({ type: CLEAR_SEARCH });
              dispatch({ type: CLEAR_USER });
              dispatch({ type: CLEAR_FAVORITES });
            }}
            className="link"
            to="/login"
          >
            Logout
          </NavLink>
        </>
      )}
    </nav>
  );
}
