import { authConstants } from '../constants';
export const authActions = {
    signIn: (body) => {
        return (dispatch) => {
            dispatch({ type: authConstants.LOGIN_REQUEST, body });
            fetch('/api/auth', { method: 'post', body: body })
            .then((res) => res.json())
            .then((json) => {
                if(json.status)
                {
                    dispatch({ type: authConstants.LOGIN_SUCCESS, json });
                }
                else{
                    dispatch({ type: authConstants.LOGIN_FAILURE, json });
                }
            })
            .catch((error) => {
                dispatch({ type: authConstants.LOGIN_FAILURE, error });
            });
        }
    }
}