import React from "react";
import Notifier from '../containers/Notifier';

const MainLayout = ({ children }) => {
    return <>
        <Notifier />
        { children }
    </>
}

export default MainLayout;