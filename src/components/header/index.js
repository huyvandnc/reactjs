import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

const Header = (props) => {
    console.log('Header props', props);
    const { auth, history } = props;
    const { token, loggingIn, currentUsers } = auth;
    const classes = useStyles();
    return (
        <AppBar position="static" color="default" style={{ boxShadow: 'none'}}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>{ history.push('/'); }}>
                    <MenuIcon />
                </IconButton>
            <Typography variant="h6" className={classes.title}>
                News
            </Typography>
            <div>
                <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={()=>{ history.push('/signin'); }}
                color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;