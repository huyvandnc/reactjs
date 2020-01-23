import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import thunk from 'redux-thunk';
const logger = createLogger({
    collapsed: true
});
export const store = createStore(reducer, applyMiddleware(thunk, logger));