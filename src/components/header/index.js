import React from 'react';
import { connect } from 'react-redux';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Paper,
    Popper,
    Grow,
    MenuList,
    MenuItem,
    ClickAwayListener,
    Divider
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';
import { authActions } from '../../redux/actions';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from "./styles";

const Header = (props) => {
    const { classes, auth, signOut, history } = props;
    const [profileOpen, setProfileOpen] = React.useState(false);
    const profileRef = React.useRef(null);
    const prevOpen = React.useRef(profileOpen);

    React.useEffect(() => {
        if (prevOpen.current === true && profileOpen === false) {
            profileRef.current.focus();
        }
        prevOpen.current = profileOpen;
    }, [profileOpen]);

    const handleToggle = () => {
        setProfileOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (profileRef.current && profileRef.current.contains(event.target)) {
            return;
        }
        setProfileOpen(false);
    };

    return (
        <AppBar position="fixed" color="default">
            <Toolbar variant="dense">
                <IconButton size="small" edge="start" color="inherit" aria-label="menu" onClick={() => history.push('/')}>
                    <MenuIcon />
                </IconButton>
                <Divider orientation="vertical" component="span" className={classes.divider} />
                <Typography variant="h6" weight="small" className={classes.logo}>
                    Cày Kiếm Cơm
                </Typography>

                <MenuList className={classes.horiz}>
                    <MenuItem onClick={() => history.push('/shop')}>Shop</MenuItem>
                    <MenuItem onClick={() => history.push('/share')}>Share</MenuItem>
                    <MenuItem onClick={() => history.push('/check')}>Tool Check</MenuItem>
                </MenuList>

                <div className={classes.grow} />
                {
                    auth.loggedIn ?
                        <>
                            <IconButton size="small" ref={profileRef} aria-controls={profileOpen ? 'profile-menu' : undefined} aria-haspopup="true" onClick={handleToggle} color="inherit">
                                <AccountCircle />
                            </IconButton>
                            <Popper open={profileOpen} anchorEl={profileRef.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList autoFocusItem={profileOpen} id="profile-menu">
                                                    <MenuItem onClick={() => { }}>Profile</MenuItem>
                                                    <MenuItem onClick={() => { }}>My account</MenuItem>
                                                    <MenuItem onClick={signOut}>Logout</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </>
                        :
                        <>
                            <Button size="small" onClick={() => history.push('/signin')}>Đăng nhập</Button>
                            <Button size="small" onClick={() => history.push('/signup')}>Đăng ký</Button>
                        </>
                }
            </Toolbar>
        </AppBar >
    );
}

const mapStateToProps = (state) => {
    const { auth } = state;
    return { auth };
}

const matchDispatchToProps = {
    signOut: authActions.signOut
}

export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(Header))