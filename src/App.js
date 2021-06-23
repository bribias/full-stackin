import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import DetailPage from './DetailPage';

function App() {
  return (
    <Router>
      <div>
        <h2>The Worst Page in the History of Pages</h2>
        <p>
          <Link to="/">
            Home
          </Link>
        </p>
        <p>
          <Link to="/create">
            Add a Character
          </Link>
        </p>
        <Switch>
          <Route path="/characters/:id" exact render={(routerProps) => <DetailPage {...routerProps} />}
          />
          <Route
            path="/creat"
            exact render={(routerProps) =>
            <CreatePage {...routerProps} />
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
