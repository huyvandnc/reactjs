import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions';
import styled from 'styled-components';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pasword, setPasword] = useState('');

    return (
        <>
        </>
    );
}

const mapStateToProps = (state) => {
    //console.log('state', state);
    const { auth } = state;
    return { auth };
}
  
const actionCreators = {
    getAllUser: userActions.getAllUser
}
  
export default connect(mapStateToProps, actionCreators)(Login);