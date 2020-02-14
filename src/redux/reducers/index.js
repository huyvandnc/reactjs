import { combineReducers } from 'redux';
import auth from './auth';
import security from './security';
import notifications from './notifications';

const rootReducer = combineReducers({
    auth,
    security,
    notifications,
    // header: headerReducer,
    // login: loginReducer,
    // footer: footerReducer,
    // common: commonReducer,
    // product: productReducer,
    // catalog: catalogReducer,
    // payment: paymentReducer
});

export default rootReducer;