const styles = theme => ({
    logo: {
        '&>img': {
            height: '24px',
            cursor: 'pointer',
            display: 'inherit',
            alignItems: 'inherit',
            justifyContent: 'inherit'
        }
    },
    grow: {
        flexGrow: 1
    },
    divider: {
        height: '15px',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    profileMenu: {
        '&>*': {
            marginLeft: theme.spacing(0.25),
            marginRight: theme.spacing(0.25),
        },
        '&>button .MuiButton-endIcon': {
            marginLeft: theme.spacing(0)
        },
        '&>button .MuiAvatar-root': {
            width: theme.spacing(3),
            height: theme.spacing(3),
        }
    },
    Skeleton: {
        '&>*': {
            display: 'inline-block',
            marginLeft: theme.spacing(0.25),
            marginRight: theme.spacing(0.25),
        }
    }    
})

export default styles