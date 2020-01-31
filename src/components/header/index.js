import React from 'react';
import { connect } from 'react-redux';
import {
    AppBar,
    Toolbar,
    IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle, ExitToApp } from '@material-ui/icons';
import { authActions } from '../../redux/actions';

const Header = (props) => {
    const { auth, signOut, history } = props;

    return (
        <AppBar position="static" color="default">
            <Toolbar variant="dense">
                <IconButton size="small" edge="start" color="inherit" aria-label="menu" onClick={() => history.push('/')}>
                    <MenuIcon />
                </IconButton>
                <div>
                    {
                        auth.loggedIn ?
                            <IconButton size="small" aria-controls="menu-appbar" aria-haspopup="true" onClick={signOut} color="inherit">
                                <ExitToApp />
                            </IconButton>
                            :
                            <IconButton size="small" aria-controls="menu-appbar" aria-haspopup="true" onClick={() => history.push('/signin')} color="inherit">
                                <AccountCircle />
                            </IconButton>
                    }
                </div>
            </Toolbar>
        </AppBar>
    );
}

const mapStateToProps = (state) => {
    const { auth } = state;
    return { auth };
}

const matchDispatchToProps = {
    signOut: authActions.signOut
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);