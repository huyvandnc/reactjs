import { history } from '../../utils';
import { authConstants } from '../constants';
import { addNotification } from '../actions'

export const authActions = {
    signInSuccess: (user) => {
        return (dispatch) => {
            dispatch({ type: authConstants.SIGNIN_SUCCESS, payload: user });
        }
    },
    signIn: (body) => {
        return (dispatch) => {
            dispatch({ type: authConstants.SIGNIN_REQUEST });
            fetch('/api/signin', { method: 'post', body: body })
                .then((res) => res.json())
                .then((json) => {
                    if (json.success) {
                        localStorage.setItem('token', json.token);
                        localStorage.setItem('user', JSON.stringify(json.user));
                        history.push('/');
                        dispatch({ type: authConstants.SIGNIN_SUCCESS, payload: json });
                    }
                    else {
                        dispatch({ type: authConstants.SIGNIN_FAILURE, payload: json });
                        dispatch(addNotification(json.message, 'error'));
                    }
                })
                .catch((error) => {
                    dispatch({ type: authConstants.SIGNIN_FAILURE });
                });
        }
    },
    signUp: (body) => {
        return (dispatch) => {
            dispatch({ type: authConstants.SIGNUP_REQUEST });
            fetch('/api/signup', { method: 'post', body: body })
                .then((res) => res.json())
                .then((json) => {
                    if (json.success) {
                        localStorage.setItem('token', json.token);
                        localStorage.setItem('user', JSON.stringify(json.user));
                        history.push('/');
                        dispatch({ type: authConstants.SIGNUP_SUCCESS, payload: json });
                    }
                    else {
                        dispatch({ type: authConstants.SIGNUP_FAILURE, payload: json });
                        dispatch(addNotification(json.message, 'error'));
                    }
                })
                .catch((error) => {
                    dispatch({ type: authConstants.SIGNUP_FAILURE });
                });
        }
    },
    signOut: () => {
        return (dispatch) => {
            localStorage.clear();
            dispatch({ type: authConstants.SIGNOUT });
        }
    }
}