import { useState, useRef, useCallback, useContext } from "react";
import debounce from "../../../utils/debounce";
import useHttp from "../../../hooks/use-http";
import AuthContext from "../../../context/AuthContext";

const useTodoInp = (addItem) => {
    const [isBtnAble, setIsBtnAble] = useState(false);
    const inpRef = useRef();
    const ctx = useContext(AuthContext);
    const { isLoggedIn: token } = ctx;
    const sendRequest = useHttp();

    const debouncedHandleInpChange = debounce((inpValue) => {
        inpValue.length ? setIsBtnAble(true) : setIsBtnAble(false); 
    }, 100);

    const handleInpChange = useCallback(
        (e) => {
            debouncedHandleInpChange(e.target.value);
        },
        [debouncedHandleInpChange]
    );

    const renderAfterSubmit = useCallback((res) => {
        addItem(res.data);
        setIsBtnAble(false);
        inpRef.current.value = "";
    }, [addItem]);

    const createTodo = useCallback(() => {
        const reqConfig = {
            method: "POST",
            URL: "/todos",
            data: {
                "todo": inpRef.current.value
            },
            headers: {
                "Authorization": `Bearer ${token}`,
                // "Authorization": `We Bare Bears ${token}`,
                "Content-Type": "application/json"
            }
        };

        const handleCreateErr = (err) => {
            console.log(err);
        };

        sendRequest(
            reqConfig, 
            renderAfterSubmit, 
            handleCreateErr
        );
    }, [token, sendRequest, renderAfterSubmit]);

    const handleInpSubmit = useCallback(
        (e) => {
            e.preventDefault();
            createTodo();
        },
        [createTodo]
    );

    return { isBtnAble, inpRef, handleInpChange, handleInpSubmit };
};

export default useTodoInp;
