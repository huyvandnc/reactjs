import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Icon, IconButton, Snackbar } from "@material-ui/core";
import { clearSnackbar } from "../redux/actions/snackbarActions";

const SnackbarMsg = () => {
    const dispatch = useDispatch();

    const { successSnackbarMessage, successSnackbarOpen } = useSelector(
        state => state.ui
    );

    const handleClose = () => {
        dispatch(clearSnackbar());
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
            }}
            open={successSnackbarOpen}
            autoHideDuration={4000}
            onClose={handleClose}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar">
                    <Icon>check_circle</Icon>
                    {successSnackbarMessage}
                </span>
            }
            action={[
                <IconButton
                    key="close"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                >
                    <Icon>close</Icon>
                </IconButton>
            ]}
        />
    );
}

export default SnackbarMsg;