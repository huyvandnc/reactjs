import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Navbar';
import {
  Container
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles"

const Home = (props) => {
  const { classes } = props;
  const userJson = JSON.stringify(props.security, null, 4)
  return (
    <>
      <MainLayout>
        <Header {...props} />
        <div className={classes.paper}>
          <Container component="main">
            <pre>
              {userJson}
            </pre>
          </Container>
        </div>
      </MainLayout>
    </>
  );
}

export default withStyles(styles)(Home)