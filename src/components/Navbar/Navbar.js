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
    SmsOutlined
} from '@material-ui/icons'
import Menu from '@material-ui/core/Menu'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from "./styles"
import logo from "../../logo.svg"

const UserAvatar = ({ classes, signOut, history, security }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null)
    };
    return (
        <div className={classes.profileMenu}>
            <Button component="div" onClick={() => history.push('/')}><ShoppingCartOutlined /></Button>
            <Button component="div" onClick={() => history.push('/')}><SmsOutlined /></Button>
            <Button component="div" onClick={() => history.push('/')}><NotificationsNone /></Button>
            <Button endIcon={<ExpandMore fontSize="small" />} aria-owns={anchorEl ? "profileMenu" : null} aria-haspopup="true" onClick={handleClick}>
                {
                    security.user.photo ?
                        <Avatar alt={security.user.name} src={security.user.photo} />
                        :
                        <Avatar alt={security.user.name}>{security.user.name.charAt(0)}</Avatar>
                }
            </Button>
            <Menu id="profileMenu" anchorOrigin={{ vertical: "bottom", horizontal: "left" }} getContentAnchorEl={null} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} elevation={4}>
                <MenuItem onClick={handleClose}>Thông tin Tài khoản</MenuItem>
                <MenuItem onClick={handleClose}>Cài đặt Tài khoản</MenuItem>
                <MenuItem onClick={signOut}>Đăng xuất</MenuItem>
            </Menu>
        </div>
    )
}

const Navbar = (props) => {
    const { classes, history, security } = props;
    return (
        <AppBar position="fixed" color="default" elevation={4}>
            <Toolbar variant="dense">
                <Button component="div" onClick={() => history.push('/')}>
                    <div className={classes.logo}>
                        <img src={logo} onClick={() => history.push('/')} alt="Cày Kiếm Cơm" />
                    </div>
                </Button>
                <div className={classes.grow} />
                {
                    security.loggedIn ?
                        <UserAvatar {...props} />
                        :
                        <>
                            <Button component="div" onClick={() => history.push('/signin')}>Đăng nhập</Button>
                            <Divider orientation="vertical" component="div" className={classes.divider} />
                            <Button component="div" onClick={() => history.push('/signup')}>Đăng ký</Button>
                        </>
                }
            </Toolbar>
        </AppBar >
    );
}

export default withStyles(styles)(Navbar)