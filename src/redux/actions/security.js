import { REMOVE_AUTHENTICATED_USER, SET_AUTHENTICATED_USER } from '../constants/ActionTypes';
export const setAuthenticatedUser = (user) => {
    return { type: SET_AUTHENTICATED_USER, payload: user }
}

export const removeAuthenticatedUser = () => {
    return { type: REMOVE_AUTHENTICATED_USER }
}