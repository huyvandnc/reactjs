import { createMuiTheme } from '@material-ui/core/styles';
const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
    //shadows: Array(25).fill('none'),
    mixins: {
        gutters: (styles = {}) => ({
            paddingLeft: defaultTheme.spacing.unit * 2,
            paddingRight: defaultTheme.spacing.unit * 2,
            ...styles,
            [defaultTheme.breakpoints.up('sm')]: {
                paddingLeft: defaultTheme.spacing.unit * 2,
                paddingRight: defaultTheme.spacing.unit * 2,
                ...styles[defaultTheme.breakpoints.up('sm')],
            },
        }),
    },
    typography: {
        fontFamily: [
            'Roboto',
            'Arial',
            'Helvetica',
            'sans-serif',
        ].join(','),
        button: {
            textTransform: 'none'
        }
    },
    palette: {
        background: {
            default: "#ffffff"
        }
    },
});

export default {
    theme
};