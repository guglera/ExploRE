import React, { useState } from 'react';

export const AuthContext = React.createContext({
    user: null,
    login: () => {},
})

const AuthContextProvider = (props) => {
    const [userData, setUserData] = useState(null);

    const loginHandler = (user) => {
        setUserData(user);
    }

    return (
        <AuthContext.Provider
            value={{
                user : userData,
                login: loginHandler,
            }}
        >
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;