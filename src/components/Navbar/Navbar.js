import React from 'react'
import {
    AppBar,
    Toolbar,
    MenuItem,
    Divider,
    Avatar,
    Button
} from '@material-ui/core'
import {
    ShoppingCartOutlined,
    NotificationsNone,
    ExpandMore,
} from '@material-ui/icons'
import Menu from '@material-ui/core/Menu'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from "./styles"
import logo from "../../logo.svg"

const UserAvatar = (props) => {
    const { classes, signOut, history, security } = props;
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null)
    };
    return (
        <div className={classes.profileMenu}>
            <Button onClick={() => history.push('/')}><ShoppingCartOutlined /></Button>
            <Button onClick={() => history.push('/')}><NotificationsNone /></Button>
            <Button endIcon={<ExpandMore fontSize="small" />} aria-owns={anchorEl ? "profileMenu" : null} aria-haspopup="true" onClick={handleClick}>
                {
                    security.user.photo ?
                        <Avatar alt={security.user.name} src={security.user.photo} />
                        :
                        <Avatar alt={security.user.name}>{security.user.name.charAt(0)}</Avatar>
                }
            </Button>
            <Menu id="profileMenu" anchorOrigin={{ vertical: "bottom", horizontal: "left" }} getContentAnchorEl={null} anchorEl={anchorEl} open={open} onClose={handleClose} elevation={4}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => { signOut(); history.push('/') }}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

const Navbar = (props) => {
    const { classes, history, security } = props;
    React.useEffect(() => {
    }, []);

    return (
        <AppBar position="fixed" color="default" elevation={4}>
            <Toolbar variant="dense">
                <div className={classes.logo}>
                    <img src={logo} onClick={() => history.push('/')} alt="Cày Kiếm Cơm" />
                </div>
                <div className={classes.grow} />
                {
                    security.loggedIn ?
                        <UserAvatar {...props} />
                        :
                        <>
                            <Button onClick={() => history.push('/signin')}>Đăng nhập</Button>
                            <Divider orientation="vertical" component="span" className={classes.divider} />
                            <Button onClick={() => history.push('/signup')}>Đăng ký</Button>
                        </>
                }
            </Toolbar>
        </AppBar >
    );
}

export default withStyles(styles)(Navbar)