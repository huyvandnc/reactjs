import React from 'react';
import {
  Container,
  Typography,
  Link,
  TextField,
  Button,
  Grid,
  Avatar,
  CssBaseline,
  Box,
  CircularProgress
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { authActions } from '../../redux/actions';

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

const SignUpPage = (props) => {
  //console.log('SignUpPage', props);
  const classes = useStyles();
  const { auth, signUp, history } = props;
  const { loading } = auth;
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [password, setPasword] = React.useState('');
  const [repassword, setRePasword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new URLSearchParams(new FormData(event.target));
    signUp(data);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">Đăng ký</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField value={name} onChange={e => setName(e.target.value)} size="small" variant="outlined" margin="normal" required fullWidth id="name" label="Tên" name="name" />
          <TextField value={email} onChange={e => setEmail(e.target.value)} size="small" variant="outlined" margin="normal" required fullWidth id="email" label="Email" name="email" />
          <TextField value={mobile} onChange={e => setMobile(e.target.value)} size="small" variant="outlined" margin="normal" required fullWidth id="mobile" label="Di động" name="mobile" />
          <TextField value={password} onChange={e => setPasword(e.target.value)} size="small" variant="outlined" margin="normal" required fullWidth name="password" label="Mật khẩu" type="password" id="password" />
          <TextField value={repassword} onChange={e => setRePasword(e.target.value)} size="small" variant="outlined" margin="normal" required fullWidth name="repassword" label="Xác nhận Mật khẩu" type="password" id="repassword" />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Đăng ký'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link variant="body2" onClick={() => { history.push('/forgot'); }}>Quên mật khẩu?</Link>
            </Grid>
            <Grid item>
              <Link variant="body2" onClick={() => { history.push('/signin'); }}>Đã có tài khoản? Đăng nhập</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => {
  //console.log('state', state);
  const { auth } = state;
  return { auth };
}

const matchDispatchToProps = {
  signUp: authActions.signUp
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUpPage);