import AuthContext from "./AuthContext";
import useAuth from "./hooks/useAuth";

export default function AuthContextProvider(props) {
    const isLoggedIn = useAuth();

    return (
        <AuthContext.Provider
            value={{isLoggedIn: isLoggedIn}}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
