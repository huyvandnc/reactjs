import { SET_AUTHENTICATED_USER, REMOVE_AUTHENTICATED_USER } from '../constants/ActionTypes';
const initialState = {};
const security = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED_USER:
            console.log('action.payload', action.payload);
            return Object.assign(Object.assign({}, state), {
                loading: false,
                loggedIn: true,
                user: action.payload,
            });
        case REMOVE_AUTHENTICATED_USER:
            return Object.assign(Object.assign({}, state), {
                loading: false,
                loggedIn: false,
                user: {}
            });
        default:
            return state;
    }
};
export default security;