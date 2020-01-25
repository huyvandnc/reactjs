import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/home';
import Signin from './pages/auth';
import {history} from './helpers';
import './App.css';

const App = () => {
  return (
  <>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </>
  );
}

export default App;
