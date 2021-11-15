import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
/**  Link **/
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
