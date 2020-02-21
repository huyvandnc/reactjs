import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../../redux/actions';
import {
  Container,
  Typography,
  Link,
  TextField,
  Button,
  Grid,
  Avatar,
  Box,
  CircularProgress,
  Card,
  CardContent,
} from '@material-ui/core';
import {
  LockOutlined
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Navbar/Navbar';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://caykiem.com">Cày Kiếm Cơm</Link>{' '}
      2015-{new Date().getFullYear()}
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
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInPage = (props) => {
  const classes = useStyles();
  const { auth, signIn, history } = props;
  const { loading } = auth;
  const [email, setEmail] = React.useState('');
  const [password, setPasword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(new URLSearchParams(new FormData(event.target)));
  }

  return (
    <>
      <MainLayout>
        <Header {...props} />
        <Grid container justify="center">
          <Grid item xs={6}>
            <Container component="main" maxWidth="xs">
              <div className={classes.paper}>
                <Card>
                  <CardContent>
                    <Avatar className={classes.avatar}>
                      <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">Đăng Nhập</Typography>
                    <Button disableElevation fullWidth variant="contained" color="primary" href="/api/v1/auth/facebook">
                      Login with Facebook
                </Button>
                    <Button disableElevation fullWidth variant="contained" href="/api/v1/auth/google">
                      Login with Google
                </Button>
                    <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
                      <TextField value={email} onChange={e => setEmail(e.target.value)} size="small" variant="outlined" margin="normal" required fullWidth label="Email" name="email" id="email" />
                      <TextField value={password} onChange={e => setPasword(e.target.value)} size="small" variant="outlined" margin="normal" required fullWidth label="Mật khẩu" type="password" name="password" id="password" />
                      <Button disableElevation type="submit" fullWidth variant="contained" color="primary" className={classes.submit} disabled={loading}>
                        {loading ? <CircularProgress size={24} /> : 'Đăng nhập'}
                      </Button>
                      <Grid container>
                        <Grid item xs>
                          <Link variant="body2" onClick={() => { history.push('/forgot'); }}>Quên mật khẩu?</Link>
                        </Grid>
                        <Grid item>
                          <Link variant="body2" onClick={() => { history.push('/signup'); }}>Chưa có tài khoản? Đăng ký</Link>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </div>
              <Box mt={8}>
                <Copyright />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
}

const mapStateToProps = (state) => {
  return state;
}

const matchDispatchToProps = {
  signIn: authActions.signIn
}

export default connect(mapStateToProps, matchDispatchToProps)(SignInPage);