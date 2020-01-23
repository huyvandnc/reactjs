import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import styled from 'styled-components';
import Home from './components/home';
import Signin from './components/auth';
import {history} from './helpers';
import './App.css';

const Container = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   flex-direction: column;
`;

const App = () => {
  return (
  <Container>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </Container>
  );
}

export default App;
