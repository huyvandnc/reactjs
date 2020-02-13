import React from 'react';
import { connect } from 'react-redux';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Paper,
    Popper,
    Grow,
    MenuList,
    MenuItem,
    ClickAwayListener,
    Divider,
    Button,
    Avatar
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { authActions } from '../../redux/actions';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from "./styles";

const UserAvatar = ({ classes, user }) => {
    if (user.photo) {
        return (<Avatar alt={user.name} src={user.photo} className={classes.small} />);
    }
    else {
        return (<Avatar alt={user.name} className={classes.small}>{user.name.charAt(0)}</Avatar>);
    }
}

const Header = (props) => {
    const { classes, auth, signOut, history, security } = props;
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
                    <Menu />
                </IconButton>
                <Divider orientation="vertical" component="span" className={classes.divider} />
                <Typography variant="h6" weight="small" className={classes.logo}>
                    Cày Kiếm Cơm
                </Typography>

                <div className={classes.grow} />
                {
                    security.loggedIn ?
                        <>
                            <MenuList className={classes.horiz}>
                                <MenuItem ref={profileRef} aria-controls={profileOpen ? 'profile-menu' : undefined} aria-haspopup="true" onClick={handleToggle}>
                                    Chào, <Typography component="span" color="primary">{security.user.name}</Typography>!
                                </MenuItem>
                            </MenuList>
                            <UserAvatar user={security.user} classes={classes} />
                            <Popper open={profileOpen} anchorEl={profileRef.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList autoFocusItem={profileOpen} id="profile-menu">
                                                    <MenuItem onClick={() => { }}>Hồ sơ</MenuItem>
                                                    <MenuItem onClick={() => { }}>Tài khoản</MenuItem>
                                                    <MenuItem onClick={signOut}>Thoát</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </>
                        :
                        <>
                            <MenuList className={classes.horiz}>
                                <MenuItem onClick={() => history.push('/signin')}>Đăng nhập</MenuItem>
                                <MenuItem onClick={() => history.push('/signup')}>Đăng ký</MenuItem>
                            </MenuList>
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