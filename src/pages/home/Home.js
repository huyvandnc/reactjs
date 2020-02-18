import React from 'react';
import {
  Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Navbar';
import ProductList from '../../components/ProductList';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}))

const Home = (props) => {
  const classes = useStyles();
  //const user = JSON.stringify(props.security, null, 4)
  return (
    <>
      <MainLayout>
        <Header {...props} />
        <div className={classes.paper}>
          <Container component="main">
            <ProductList />
          </Container>
        </div>
      </MainLayout>
    </>
  );
}

export default Home