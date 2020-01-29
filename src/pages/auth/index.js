import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Link,
    TextField,
    Button,
    Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions';
import styled from 'styled-components';
import Header from '../../components/header';

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  

const Wrapper = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   flex-direction: column;
`;

const Login = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [pasword, setPasword] = useState('');

    return (
        <Wrapper>
            <Header {...props}/>
            <Container component="main" maxWidth="xs">
                <form className={classes.form} noValidate>
                <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus/>
                <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Sign In</Button>
                <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">Forgot password?</Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">{"Don't have an account? Sign Up"}</Link>
                    </Grid>
                </Grid>
                 </form>
            </Container>
        </Wrapper>
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