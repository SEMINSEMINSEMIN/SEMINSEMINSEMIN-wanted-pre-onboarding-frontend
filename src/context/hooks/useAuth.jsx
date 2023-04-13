import { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function useAuth() {
    const [storedValue, removeValue, setValue] = useLocalStorage("token", false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log("storedValue 변함 -> setIsLoggedIn 트리거");
        setIsLoggedIn(storedValue);
    }, [storedValue]);

    const logoutHandler = () => {
        removeValue();
    };

    const loginHandler = (value) => {
        setValue(value);
    };

    return {isLoggedIn, logoutHandler, loginHandler};
}