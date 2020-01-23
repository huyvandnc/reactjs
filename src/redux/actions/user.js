import { userConstants } from '../constants';
export const userActions = {
    getAllUser: async () => {
        return async (dispatch) => {
            dispatch({ type: userConstants.GETALL_REQUEST});
            const resp = await fetch(`/api/users`, { method: 'post' });
            const json = await resp.json();
            try{
                if(json.status)
                {
                    dispatch({ type: userConstants.GETALL_SUCCESS, json });
                }
                else{
                    dispatch({ type: userConstants.GETALL_FAILURE, json });
                }
            }
            catch(e) {
                dispatch({ type: userConstants.GETALL_FAILURE, e });
            }
        }
    },
    getUser: async (_id) => {
        return async (dispatch) => {
            dispatch({ type: userConstants.GET_REQUEST, _id });
            const resp = await fetch(`/api/user/${_id}`);
            const json = await resp.json();
            try{
                if(json.status)
                {
                    dispatch({ type: userConstants.GET_SUCCESS, json });
                }
                else{
                    dispatch({ type: userConstants.GET_FAILURE, json });
                }
            }
            catch(e) {
                dispatch({ type: userConstants.GET_FAILURE, e });
            }
        }
    }
}
