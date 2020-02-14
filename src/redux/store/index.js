import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
const logger = createLogger({
    collapsed: true
});

const initialState = {}
const middlewares = [thunk, logger]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
)

export default store