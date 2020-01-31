import { notificationConstants } from '../constants';
const initialState = {
    nextNotification: -1,
    list: [] // contains the list of notifications
};
const notifications = (state = initialState, action) => {
    switch (action.type) {
        case notificationConstants.ADD_NOTIFICATION:
            let key = state.nextNotification + 1; // increment notification key
            return Object.assign(Object.assign({}, state), { nextNotification: key, list: [Object.assign(Object.assign({}, action.payload), { key: key }), ...state.list] // add notification with incremented key at the start of the list
             });
        case notificationConstants.REMOVE_NOTIFICATION:
            return Object.assign(Object.assign({}, state), { list: state.list.filter((notification) => notification.key !== action.payload) // remove notification from the list for given key
             });
        default:
            return state;
    }
};
export default notifications;