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
import UserProvider from "./contexts/UserProvider";
import { history } from './utils';
import './App.css';
import { authActions } from './redux/actions'
import configureStore from './redux/store';
import io from 'socket.io-client';
const store = configureStore();

const App = () => {
  const [state, setState] = React.useState({});
  const useComponentDidMount = func => React.useEffect(func, []);
  const useComponentWillMount = func => {
    const [willMount, setWillMount] = React.useState(true);
    useComponentDidMount(() => setWillMount(false));
    if (willMount) {
      func();
    }
  }
  useComponentWillMount(() => {
    let token = Cookies.get('token');
    if (token) {
      //console.log(jwt_decode(token));
      localStorage.setItem('token', token);
      Cookies.remove('token');
      //store.dispatch(authActions.signInSuccess(jwt_decode(token)));
    }
    //console.log("Runs only once before component mounts");
  });
  useComponentDidMount(() => {
    //console.log("Runs only once after component mounts");
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right", }}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Home} />
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
