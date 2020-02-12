import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
const logger = createLogger({
    collapsed: true
});

const configureStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk, logger)));
}

export default configureStore;