import { Router } from "react-router";
import "./App.css";
import Menu from "./components/Menu";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Menu />
    </Router>
  );
}

export default App;
