const initialState = {data: []}

const users = (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_USERS' :
            return {
                ...state,
                data: action.users
            }
        default:
            return state
    }
}

export default users;