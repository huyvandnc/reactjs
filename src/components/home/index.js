import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { userActions } from '../../redux/actions';
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

const Home = (props) => {
  const { getAllUser } = props;
  useEffect(() => {
    getAllUser();
  }, [getAllUser]);
  
  return (
  <Container>
    <Welcome/>
  </Container>
  );
}

export default connect(null, userActions)(Home);