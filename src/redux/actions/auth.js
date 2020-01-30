import { history } from '../../helpers';
import { authConstants } from '../constants';
export const authActions = {
    signIn: (body) => {
        return (dispatch) => {
            dispatch({ type: authConstants.SIGNIN_REQUEST });
            fetch('/api/signin', { method: 'post', body: body })
            .then((res) => res.json())
            .then((json) => {
                if(json.success)
                {
                    history.push('/');
                    dispatch({ type: authConstants.SIGNIN_SUCCESS, json });
                }
                else{
                    dispatch({ type: authConstants.SIGNIN_FAILURE, json });
                }
            })
            .catch((error) => {
                dispatch({ type: authConstants.SIGNIN_FAILURE, error });
            });
        }
    },
    signUp: (body) => {
        return (dispatch) => {
            dispatch({ type: authConstants.SIGNUP_REQUEST });
            fetch('/api/signup', { method: 'post', body: body })
            .then((res) => res.json())
            .then((json) => {
                if(json.success)
                {
                    history.push('/');
                    dispatch({ type: authConstants.SIGNUP_SUCCESS, json });
                }
                else{
                    dispatch({ type: authConstants.SIGNUP_FAILURE, json });
                }
            })
            .catch((error) => {
                dispatch({ type: authConstants.SIGNUP_FAILURE, error });
            });
        }
    }
}