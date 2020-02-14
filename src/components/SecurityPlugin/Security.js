import React from 'react';
import { Redirect } from 'react-router';
import { getToken } from '../../utils/api';

const SecurityPlugin = ({ ...props }) => {
    const renderNotAuthorized = () => {
        if (getToken()) {
            return props.children;
        }
        else {
            return <Redirect to="/signin" />;
        }
    }

    if(props.security.user) {
        return props.children;
    } else {
        return renderNotAuthorized();
    }
}
export default SecurityPlugin;