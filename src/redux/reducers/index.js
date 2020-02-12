import { combineReducers } from 'redux';
import auth from './auth';
import security from './security';
import notifications from './notifications';

const rootReducer = combineReducers({
    auth,
    security,
    notifications,
});

export default rootReducer;