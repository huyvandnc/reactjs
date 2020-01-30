import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle, ExitToApp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));

const Header = (props) => {
    console.log('Header props', props);
    const { auth, history } = props;
    const { token, loggingIn, currentUsers } = auth;
    const classes = useStyles();
    return (
        <AppBar position="static" color="default">
            <Toolbar variant="dense">
                <IconButton size="small" edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { history.push('/'); }}>
                    <MenuIcon />
                </IconButton>
                <div>
                    {
                        loggingIn ?
                            <IconButton size="small" aria-controls="menu-appbar" aria-haspopup="true" onClick={() => { history.push('/'); }} color="inherit">
                                <ExitToApp />
                            </IconButton>
                            :
                            <IconButton size="small" aria-controls="menu-appbar" aria-haspopup="true" onClick={() => { history.push('/signin'); }} color="inherit">
                                <AccountCircle />
                            </IconButton>
                    }
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;