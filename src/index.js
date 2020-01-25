import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './redux/store';

if(localStorage.token && localStorage.currentUsers) {
    console.log('localStorage.token', localStorage.token);
    console.log('localStorage.currentUsers', localStorage.currentUsers);
    store.dispatch({type: 'CHANGE_TOKEN', token: localStorage.token, currentUsers: JSON.parse(localStorage.currentUsers)});
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
