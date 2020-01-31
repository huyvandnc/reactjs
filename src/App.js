import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { SnackbarProvider } from 'notistack';
import Home from './pages/home';
import { SignIn, SignUp } from './pages/auth';
import { history } from './helpers';
import './App.css';

const App = () => {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: "bottom", horizontal: "center", }}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
