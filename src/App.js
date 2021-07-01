import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import DetailPage from './DetailPage';

// this is a comment 

export default class App extends Component {
  render() {
  return(
    <Router>
      <div>
        <h2>The Worst Page in the History of Pages</h2>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/create">Add a Character</Link></p>
        <Switch>
          <Route
            path="/"
            exact render={(routerProps) =>
            <ListPage {...routerProps} />}
          />
          <Route path="/characters/:id" exact render={(routerProps) => <DetailPage {...routerProps} />}
          />
          <Route
            path="/create"
            exact render={(routerProps) =>
            <CreatePage {...routerProps} />}
          />

        </Switch>
      </div>
    </Router>

  );
  }
}
