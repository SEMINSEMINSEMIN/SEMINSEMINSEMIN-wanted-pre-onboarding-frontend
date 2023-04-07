import { createContext } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (value) => {}
});

export default AuthContext;