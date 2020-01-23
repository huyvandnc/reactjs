import React, { useEffect } from 'react';
import styled from 'styled-components';
import Welcome from '../Welcome';

const Container = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   flex-direction: column;
`;

const Home = () => {
  useEffect(() => {
  }, []);
  
  return (
  <Container>
    <Welcome/>
  </Container>
  );
}

export default Home;
