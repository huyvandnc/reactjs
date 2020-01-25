import { combineReducers } from 'redux';
import users from './users';
import auth from './auth';
import common from './common';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    users,
    auth,
    common,
    router: routerReducer
});