import { userConstants } from '../constants';
export const userActions = {
    getAllUser: () => (dispatch) => {
        dispatch({ type: userConstants.GETALL_REQUEST});
        fetch(`/api/users`)
        .then(res => res.json())
        .then(res => {
            dispatch({ type: userConstants.GETALL_SUCCESS, res });
            return res;
        })
        .catch(error => {
            dispatch({ type: userConstants.GETALL_FAILURE, error });
        });
    },
    getUser: async (_id) => async (dispatch) => {
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
