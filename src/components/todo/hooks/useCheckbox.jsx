import { useState, useCallback, useContext } from "react";
import useHttp from "../../../hooks/use-http";
import AuthContext from "../../../context/AuthContext";

const useCheckbox = (init) => {
    const [isChecked, setIsChecked] = useState(init);

    const ctx = useContext(AuthContext);
    const { isLoggedIn: token } = ctx;
    const sendRequest = useHttp();

    const renderAfterReq = useCallback(() => {
        setIsChecked((prev) => !prev);
    }, []);

    const handleCbClick = useCallback((id, todo) => {
        const reqConfig = {
            method: "PUT",
            URL: `/todos/${id}`,
            data: {
              "todo": todo,
              "isCompleted": !isChecked
            },
            headers: {
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"
            }
        };
        
        sendRequest(reqConfig, renderAfterReq, (e) => console.log(e));
    }, [token, isChecked, sendRequest, renderAfterReq]);

    return {
        isChecked,
        handleCbClick
    };
};

export default useCheckbox;