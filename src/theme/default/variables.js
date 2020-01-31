import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    shadows: Array(25).fill('none'),
    typography: {
        fontFamily: [
            'Roboto',
            'Arial',
            'Helvetica',
            'sans-serif',
        ].join(','),
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