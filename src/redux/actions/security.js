import { CHANGE_TOKEN } from '../constants/ActionTypes';
export const setAuthenticatedUser = (user) => {
    return { type: CHANGE_TOKEN, payload: user }
}

export const removeAuthenticatedUser = () => {
    return { type: CHANGE_TOKEN }
}