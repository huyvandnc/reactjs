import React from "react";
import { connect, useDispatch } from 'react-redux';
import { removeAuthenticatedUser, setAuthenticatedUser } from '../redux/actions';
import { getToken } from '../utils/api';

const SecurityLayout = ({ ...props }) => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        fetch("/api/v1/user/me", {
            headers: {
                'X-Auth-Token': getToken()
            }
        })
            .then(res => res.json())
            .then(res => {
                dispatch(setAuthenticatedUser(res));
            })
            .catch(err => {
                dispatch(removeAuthenticatedUser());
            });
    }, [dispatch]);

    return props.children;
}

const mapStateToProps = ({ security }) => ({
    user: security.user
});
const mapDispatchToProps = {
    setAuthenticatedUser,
    removeAuthenticatedUser
};
export default connect(mapStateToProps, mapDispatchToProps)(SecurityLayout);