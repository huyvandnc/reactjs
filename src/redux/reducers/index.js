import { combineReducers } from 'redux';
import auth from './auth';
import notifications from './notifications';

const rootReducer = combineReducers({
    auth,
    notifications,
});

export default rootReducer;