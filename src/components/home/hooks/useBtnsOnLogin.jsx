import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useBtnsOnLogin = () => {
    const navigate = useNavigate();

    const handleTodoClick = useCallback(() => {
        navigate("/todo");
    }, [navigate]);

    return {
        handleTodoClick
    };
};

export default useBtnsOnLogin;