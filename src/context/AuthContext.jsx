import { createContext } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: () => {}
});

export default AuthContext;