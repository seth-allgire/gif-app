import "./App.css";
import React from "react";
import Menu from "./components/Menu";
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
import SignupPage from "./components/SignupPage.js";

function App() {
  return (
    <Router>
      <Menu />

      <Switch>
        <ProtectedRoute shielded={false} path="/signup">
          <SignupPage />
        </ProtectedRoute>
        <ProtectedRoute shielded={false} path="/login">
          <LoginPage />
        </ProtectedRoute>
        <ProtectedRoute shielded={true} path="/search">
          <SearchPage />
        </ProtectedRoute>
        <ProtectedRoute shielded={true} path="/favorites">
          <FavoritesPage />
        </ProtectedRoute>
        <Route path="*">
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
