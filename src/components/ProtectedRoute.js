import React from "react";
import { Redirect, Route } from "react-router-dom";
export default function ProtectedRoute({
  activeUser,
  children,
  path,
  shielded,
}) {
  const redirectTo = shielded ? "/login" : "/search";

  if ((activeUser && shielded) || (!activeUser && !shielded)) {
    return <Route path={path}>{children}</Route>;
  } else {
    return (
      <Route path={path}>
        <Redirect to={redirectTo}></Redirect>
      </Route>
    );
  }
}
