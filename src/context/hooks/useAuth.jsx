import { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function useAuth() {
    const [storedValue] = useLocalStorage("token", false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(storedValue);
    }, [storedValue]);

    return isLoggedIn;
}