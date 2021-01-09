import React, { useState } from 'react';

export const AuthContext = React.createContext({
    user: null,
    login: () => {},
})

const AuthContextProvider = (props) => {
    const [userData, setUserData] = useState(null);
    const [langData, setLangData] = useState(null);

    const loginHandler = (user) => {
        setUserData(user);
    }

    const languageHandler = (language) => {
        setLangData(language);
    }

    return (
        <AuthContext.Provider
            value={{
                user: userData,
                language: langData,
                login: loginHandler,
                langfunc: languageHandler,
            }}
        >
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;