import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import { SnackbarProvider } from 'notistack';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/default';
import Home from './pages/home';
import { SignIn, SignUp } from './pages/auth';
import Security from './components/SecurityPlugin';
import SecurityLayout from './layouts/SecurityLayout';
import { history } from './utils';
import './App.css';

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
    </ThemeProvider>
  );
}

const mapStoreToProps = state => {
  return state;
}
const mapDispatchToProps = {
}
export default connect(mapStoreToProps, mapDispatchToProps)(App);
