import React from 'react';
const NotificationPlugin = (props) => {
    const { notifications, enqueueSnackbar, removeNotification } = props;
    const [displayed, setDisplayed] = React.useState([]);
    React.useEffect(() => {
        //https://codesandbox.io/s/github/iamhosseindhv/notistack/tree/master/examples/redux-example
        notifications.forEach((notification) => {
            // If notification already displayed, abort
            if (displayed.filter((key) => key === notification.key).length > 0) {
                return;
            }
            // Display notification using Snackbar
            enqueueSnackbar(notification.message, { variant: notification.type });
            // Add notification's key to the local state
            setDisplayed(displayed => [...displayed, notification.key]);
            // Dispatch action to remove the notification from the redux store
            removeNotification(notification.key);
        });
    });
    return null;
}
export default NotificationPlugin;