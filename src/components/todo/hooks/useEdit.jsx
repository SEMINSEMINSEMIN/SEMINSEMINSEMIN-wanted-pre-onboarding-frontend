import { useState, useEffect, useCallback, useContext } from "react";
import useHttp from "../../../hooks/use-http";
import AuthContext from "../../../context/AuthContext";

const useEdit = (setTodoValue, todoOnEdit, setTodoOnEdit, isChecked) => {
    const [isSubmitAble, setIsSubmitAble] = useState(true);
    const [isOnEdit, setIsOnEdit] = useState(false);
    const ctx = useContext(AuthContext);
    const { isLoggedIn: token } = ctx;
    const sendRequest = useHttp();

    useEffect(() => {
        const identifier = setTimeout(() => {
            todoOnEdit.length ? setIsSubmitAble(true) : setIsSubmitAble(false);
        }, 300);

        return () => {
            clearTimeout(identifier);
        }
    }, [todoOnEdit]);

    const handleEditIconClick = useCallback(() => {
        setIsOnEdit(true);
    }, []);

    const handleCancelIconClick = useCallback(() => {
        setIsOnEdit(false);
    }, []);

    const handleInpChange = useCallback((e) => {
        setTodoOnEdit(e.target.value);
    }, [setTodoOnEdit]);

    const renderAfterSubmit = useCallback((res) => {
        setIsOnEdit(false);
        setTodoValue(res.data.todo);
    }, [setTodoValue]);

    const handleSubmit = useCallback((e, id) => {
        e.preventDefault();
        const reqConfig = {
            method: "PUT",
            URL: `/todos/${id}`,
            data: {
                "todo": todoOnEdit,
                "isCompleted": isChecked
            },
            headers: {
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"
            }
        };

        sendRequest(reqConfig, renderAfterSubmit, (e) => console.log(e));
    }, [isChecked, sendRequest, todoOnEdit, token, renderAfterSubmit]);

    return {
        isSubmitAble,
        isOnEdit,
        handleEditIconClick,
        handleCancelIconClick,
        handleInpChange,
        handleSubmit
    };
};

export default useEdit;