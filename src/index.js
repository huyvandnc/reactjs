import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const store = configureStore();

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
    shadows: ["none"],
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
    overrides: {

    }
});

if (localStorage.token && localStorage.currentUsers) {
    console.log('localStorage.token', localStorage.token);
    console.log('localStorage.currentUsers', localStorage.currentUsers);
    store.dispatch({ type: 'CHANGE_TOKEN', token: localStorage.token, currentUsers: JSON.parse(localStorage.currentUsers) });
}

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
