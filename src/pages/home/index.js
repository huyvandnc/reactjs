import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/header';

const Container = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   flex-direction: column;
`;

const Home = (props) => {
  return (
  <Container>
    <Header {...props}/>
  </Container>
  );
}

const mapStateToProps = (state) => {
  return state;
}

const matchDispatchToProps = {
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);