import React, {useState, createContext} from "react";
export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
    const [user, setUser] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const authenticate =() => {
        setIsAuthenticated(!isAuthenticated);
    }
    const setUserInfo = userInfo => {
        setUser(userInfo);

    }
    return(
<AuthContext.Provider value = {{user, isAuthenticated, authenticate, setUserInfo}} >{children}</AuthContext.Provider>
    )

}