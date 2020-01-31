import { notificationConstants } from '../constants';
export const addNotification = (message, type = 'info') => ({
    type: notificationConstants.ADD_NOTIFICATION,
    payload: {
        message,
        type
    }
});
export const removeNotification = (key) => ({
    type: notificationConstants.REMOVE_NOTIFICATION,
    payload: key
});