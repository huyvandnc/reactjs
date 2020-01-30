import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './redux/store';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';


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

if(localStorage.token && localStorage.currentUsers) {
    console.log('localStorage.token', localStorage.token);
    console.log('localStorage.currentUsers', localStorage.currentUsers);
    store.dispatch({type: 'CHANGE_TOKEN', token: localStorage.token, currentUsers: JSON.parse(localStorage.currentUsers)});
}

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
