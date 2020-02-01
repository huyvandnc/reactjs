const MuiToolbar = (theme) => {
    return {
        MuiToolbar: {
            gutters: {
                [theme.breakpoints.down('xl')]: {
                    paddingLeft: '15px',
                    paddingRight: '15px',
                },
            },
        }
    }
}
export default MuiToolbar;