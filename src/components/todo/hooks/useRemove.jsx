import { useCallback, useContext, useState } from "react";
import useHttp from "../../../hooks/use-http";
import AuthContext from "../../../context/AuthContext";

const useRemove = (renderOnDelete) => {
    const [isModalShown, setIsModalShown] = useState(false);
    const ctx = useContext(AuthContext);
    const { isLoggedIn: token } = ctx;
    const sendRequest = useHttp();

    const hideModal = useCallback(() => {
        setIsModalShown(false);
    }, []);

    const handleRemoveIconClick = useCallback(() => {
        setIsModalShown(true);
    }, []);

    const handleDeleteConfirm = useCallback((id) => {
        const reqConfig = {
            method: "DELETE",
            URL: `/todos/${id}`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        sendRequest(
            reqConfig,
            () => {
                renderOnDelete(id)
                setIsModalShown(false);
            },
            (e) => console.log(e)
        );
    }, [token, renderOnDelete, sendRequest]);

    return {
        isModalShown,
        hideModal,
        handleRemoveIconClick,
        handleDeleteConfirm
    };
};

export default useRemove;