const initialState = {
    users: [],
    user: {}
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_USERS' :
        return {
            ...state,
            users: action.users
        }
        case 'VIEW_USER':
        return {
            ...state,
            user: action.user
        }
        default:
            return state
    }
}