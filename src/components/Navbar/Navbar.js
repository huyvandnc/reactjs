import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    MenuList,
    MenuItem,
    Divider,
    Avatar
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';

const UserAvatar = (props) => {
    const { classes, signOut, history, security } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const _signOut = event => {
        signOut();
        history.push('/');
    };

    return (
        <div>
            <IconButton className={classes.avbutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {
                    security.user.photo ?
                        <Avatar alt={security.user.name} src={security.user.photo} className={classes.small} />
                        :
                        <Avatar alt={security.user.name} className={classes.small}>{security.user.name.charAt(0)}</Avatar>
                }
            </IconButton>
            <Menu id="simple-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={_signOut}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

const Header = (props) => {
    const { classes, history, security } = props;
    React.useEffect(() => {
    }, []);

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

                <div className={classes.grow} />
                {
                    security.loggedIn ?
                        <UserAvatar {...props} />
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

export default Header;