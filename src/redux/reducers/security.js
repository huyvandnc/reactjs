import _ from 'lodash';
import { CHANGE_TOKEN } from '../constants/ActionTypes';
const initialState = {
    loading: true,
    loggedIn: false,
    user: {}
};
const security = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TOKEN:
            if (!_.isEmpty(action.payload)) {
                return {
                    ...initialState,
                    loading: false,
                    loggedIn: true,
                    user: action.payload
                }
            }
            else {
                return {
                    ...initialState,
                    loading: false,
                    error: action.payload
                }
            }
        default:
            return state;
    }
};
export default security;