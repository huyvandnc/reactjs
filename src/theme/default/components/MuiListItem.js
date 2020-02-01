const MuiListItem = (theme) => {
    return {
        MuiListItem: {
            gutters: {
                [theme.breakpoints.down('xl')]: {
                    paddingLeft: theme.spacing(2),
                    paddingRight: theme.spacing(2),
                },
            },
        }
    }
}
export default MuiListItem;