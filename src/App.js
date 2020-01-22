import React, { useEffect } from 'react';
import styled from 'styled-components';
import Welcome from './components/Welcome';
import './App.css';

document.addEventListener('touchstart', function() {}, true);

const Container = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   flex-direction: column;
`;

const callApi = async () => {
  const response = await fetch('/api/users');
  const body = await response.json();
  return body;
};

const App = () => {
  useEffect(() => {
    callApi();
  }, []);
  
  return (
  <Container>
    <Welcome/>
  </Container>
  );
}

export default App;
