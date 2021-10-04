import "./App.css";
import Menu from "./components/Menu";
import React, { useReducer, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import SearchPage from "./components/SearchPage";
import FavoritesPage from "./components/FavoritesPage";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { rootReducer, initialState } from "./shared/rootReducer";

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Router>
      <Menu user={state.user} dispatch={dispatch} />
      <Switch>
        <ProtectedRoute user={state.user} shielded={false} path="/login">
          <LoginPage dispatch={dispatch} />
        </ProtectedRoute>
        <ProtectedRoute user={state.user} shielded={true} path="/search">
          <SearchPage
            dispatch={dispatch}
            user={state.user}
            favorites={state.favorites}
          />
        </ProtectedRoute>
        <ProtectedRoute user={state.user} shielded={true} path="/favorites">
          <FavoritesPage
            dispatch={dispatch}
            user={state.user}
            favorites={state.favorites}
          />
        </ProtectedRoute>
        <ProtectedRoute user={state.user} shielded={true} path="/login">
          {/* <Logout
          // dispatch={dispatch}
          // user={(state.user = "")}
          // favorites={(state.favorites = [])}
          // search={(state.search = "")}
          /> */}
        </ProtectedRoute>
        <Route path="*">
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
