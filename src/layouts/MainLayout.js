import React from "react";
import Notifier from '../components/NotificationPlugin';

const MainLayout = ({ children }) => {
    return <>
        <Notifier />
        { children }
    </>
}

export default MainLayout;