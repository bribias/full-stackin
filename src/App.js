import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import './App.css';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import DetailPage from './DetailPage';
import Header from './Header';

export default class App extends Component {
  render() {
  return(
      <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact render={(routerProps) => <ListPage {...routerProps} />}
            />
          <Route path="/characters/:id" exact render={(routerProps) => <DetailPage {...routerProps} />}
          />
          <Route
            path="/create"
            exact render={(routerProps) =>
            <CreatePage {...routerProps} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
}
