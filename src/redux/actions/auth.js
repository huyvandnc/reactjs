import { authConstants } from '../constants';
export const authActions = {
    signIn: async(body) => {
        return async (dispatch) => {
            dispatch({ type: authConstants.LOGIN_REQUEST, body });
            const resp = await fetch('/api/auth', { method: 'post', body: body });
            const json = await resp.json();
            try{
                if(json.status)
                {
                    dispatch({ type: authConstants.LOGIN_SUCCESS, json });
                }
                else{
                    dispatch({ type: authConstants.LOGIN_FAILURE, json });
                }
            }
            catch(e) {
                dispatch({ type: authConstants.LOGIN_FAILURE, e });
            }
        }
    }
}