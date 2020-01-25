import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { userActions } from '../../redux/actions';
import Welcome from '../../components/Welcome';
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
  //console.log('props', props);
  const { getAllUser } = props;
  useEffect(() => {
    getAllUser();
  }, [getAllUser]);
  
  return (
  <Container>
    <Header></Header>
    <Welcome></Welcome>
  </Container>
  );
}

const mapStateToProps = (state) => {
  //console.log('state', state);
  const { auth } = state;
  return { auth };
}

const actionCreators = {
  getAllUser: userActions.getAllUser,
}

export default connect(mapStateToProps, actionCreators)(Home);