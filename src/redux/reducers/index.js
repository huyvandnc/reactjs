import { combineReducers } from 'redux';
import auth from './auth';
import security from './security';
import notifications from './notifications';

import products from './Products'
import cart from './Cart'
import shipping from './Shipping'
import billing from './Billing'
import account from './Account'


const rootReducer = combineReducers({
    auth,
    security,
    notifications,
    products,
    cart,
    shipping,
    billing,
    account
});

export default rootReducer;