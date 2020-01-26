import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions';
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
  const { getAllUser } = props;
  useEffect(() => {
    getAllUser();
  }, [getAllUser]);
  
  return (
  <Container>
    <Header {...props}/>
  </Container>
  );
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
}

const actionCreators = {
  getAllUser: userActions.getAllUser,
}

export default connect(mapStateToProps, actionCreators)(Home);