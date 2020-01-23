import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';
import common from './common';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    user,
    auth,
    common,
    router: routerReducer
});