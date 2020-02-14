import { CHANGE_TOKEN } from '../constants/ActionTypes';

export const setAuthenticatedUser = (user) => dispatch => {
    return dispatch({ type: CHANGE_TOKEN, payload: user })
}

export const removeAuthenticatedUser = () => dispatch => {
    return dispatch({ type: CHANGE_TOKEN })
}