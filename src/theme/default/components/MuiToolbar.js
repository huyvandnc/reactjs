const MuiToolbar = (theme) => {
    return {
        MuiToolbar: {
            gutters: {
                [theme.breakpoints.down('xl')]: {
                    paddingLeft: theme.spacing(1),
                    paddingRight: theme.spacing(1),
                },
            },
        }
    }
}
export default MuiToolbar;