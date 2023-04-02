import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useLoginCheck() {
    const [storedValue] = useLocalStorage("token", false);
    const [isLoggedIn, setIsLoggedIn] = useState();
    
    useEffect(() => {
        setIsLoggedIn(storedValue);
    }, [storedValue]);

    return isLoggedIn;
}
