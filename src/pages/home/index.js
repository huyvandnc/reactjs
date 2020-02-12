import React from 'react';
import { connect } from 'react-redux';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/header';
import {
  Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const Home = (props) => {
  const classes = useStyles();
  const userJson = JSON.stringify(props, null, 4)
  return (
    <>
      <MainLayout>
        <Header {...props} />
        <Container component="main">
        <div className={classes.paper}>
            <pre>
              {userJson}
            </pre>
          </div>
        </Container>
      </MainLayout>
    </>
  );
}

const mapStateToProps = (state) => {
  return state;
}

const matchDispatchToProps = {
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);