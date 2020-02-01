const styles = theme => ({
    logo: {
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(1),
        fontWeight: 500,
        fontSize: 15,
        whiteSpace: "nowrap",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
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
    buttons: {
        '&>*': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        }
    },
    horiz: {
        '&>li': {
            fontSize: '15px',
            display: 'inline-block'
        },
        '&>li:hover': {
            borderRadius: '4px',
        }
    }
})

export default styles