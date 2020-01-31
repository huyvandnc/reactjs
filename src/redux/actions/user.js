import { userConstants } from '../constants';
export const userActions = {
    getAllUser: () => (dispatch) => {
        dispatch({ type: userConstants.GETALL_REQUEST});
        fetch(`/api/users`)
        .then(res => res.json())
        .then(json => {
            dispatch({ type: userConstants.GETALL_SUCCESS, json });
            return json;
        })
        .catch(error => {
            dispatch({ type: userConstants.GETALL_FAILURE, error });
        });
    },
    getUser: async (_id) => async (dispatch) => {
        dispatch({ type: userConstants.GET_REQUEST, _id });
        fetch(`/api/user/${_id}`)
        .then(res => res.json())
        .then(json => {
            dispatch({ type: userConstants.GET_SUCCESS, json });
            return json;
        })
        .catch(error => {
            dispatch({ type: userConstants.GET_FAILURE, error });
        });
    }
}
