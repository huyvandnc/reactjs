import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom'
import { SnackbarProvider } from 'notistack';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/default';
import Home from './pages/home';
import { SignIn, SignUp } from './pages/auth';
import UserProvider from "./contexts/UserProvider";
import { history } from './utils';
import './App.css';
import configureStore from './redux/store';
const store = configureStore();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right", }}>
          <Router history={history}>
            <Switch>
              <UserProvider>
                <Route exact path="/" component={Home} />
              </UserProvider>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </Router>
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
