import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import { SnackbarProvider } from 'notistack';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/default';
import Home from './pages/home';
import { SignIn, SignUp } from './pages/auth';
import Security from './containers/Security';
import SecurityLayout from './layouts/SecurityLayout';
import { history } from './utils';
import './App.css';
import { authActions } from './redux/actions'
import configureStore from './redux/store';
import io from 'socket.io-client';
const store = configureStore();

const App = () => {
  React.useEffect(() => {
    let token = Cookies.get('token');
    if (token) {
      localStorage.setItem('token', token);
      Cookies.remove('token');
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right", }}>
          <SecurityLayout>
            <Router history={history}>
              <Security>
                <Route exact path="/" component={Home} />
              </Security>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </Router>
          </SecurityLayout>
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
