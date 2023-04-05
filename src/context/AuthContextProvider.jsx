import AuthContext from "./AuthContext";
import useAuth from "./hooks/useAuth";

export default function AuthContextProvider(props) {
    const {isLoggedIn, logoutHandler, loginHandler} = useAuth();

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
