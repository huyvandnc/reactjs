import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Link,
    TextField,
    Button,
    Grid,
    Avatar,
    CssBaseline
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
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

const handleLogin = (event) => {

}

const Login = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">Đăng Nhập</Typography>
                <form className={classes.form} noValidate>
                    <TextField value={email} size="small" variant="outlined" margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email" autoFocus/>
                    <TextField value={password} size="small" variant="outlined" margin="normal" required fullWidth name="password" label="Mật khẩu" type="password" id="password" autoComplete="current-password"/>
                    <Button type="submit" disableElevation fullWidth variant="contained" color="primary" className={classes.submit}>Đăng nhập</Button>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">Quên mật khẩu?</Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">{"Chưa có tài khoản? Đăng ký"}</Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
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