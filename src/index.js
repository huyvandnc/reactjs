import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './redux/store';
import { userActions } from './redux/actions'

if(localStorage.Auth) {
    console.log('localStorage.Auth', localStorage.Auth);
    store.dispatch({type: 'SET_USER', user: JSON.parse(localStorage.Auth)});
    var _id = JSON.parse(localStorage.Auth)._id
    userActions.getUser(_id).then((res)=> {
        console.log('getUser', res);
        store.dispatch({type: 'SET_USER', user: res});
    })
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
