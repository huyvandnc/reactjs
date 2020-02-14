import React from "react";
import { connect } from 'react-redux';
import { removeAuthenticatedUser, setAuthenticatedUser } from '../redux/actions';
import { getToken } from '../utils/api';

const SecurityLayout = ({ setAuthenticatedUser, removeAuthenticatedUser, children }) => {
    React.useEffect(() => {
        fetch("/api/v1/user/me", {
            headers: {
                'X-Auth-Token': getToken()
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.success === false) {
                    removeAuthenticatedUser();
                }
                else {
                    setAuthenticatedUser(res);
                }
            })
            .catch(err => {
                removeAuthenticatedUser();
            });
    }, [setAuthenticatedUser, removeAuthenticatedUser]);

    return children;
}

const mapStateToProps = ({ security }) => ({
    user: security.user
});
const mapDispatchToProps = {
    setAuthenticatedUser,
    removeAuthenticatedUser
};
export default connect(mapStateToProps, mapDispatchToProps)(SecurityLayout);