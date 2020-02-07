import React from "react";

const context = React.createContext(null);
const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({});
    React.useEffect(() => {
        fetch("/api/v1/user/me")
            .then(res => res.json())
            .then(res => setUser(res))
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <context.Provider value={user}>
            {children}
        </context.Provider>
    );
};

UserProvider.context = context;
export default UserProvider;