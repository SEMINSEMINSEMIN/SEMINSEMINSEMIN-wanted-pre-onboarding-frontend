import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useBtnsOnLogout = () => {
    const navigate = useNavigate();

    const handleSignUpClick = useCallback(() => {
        navigate("/signup");
    }, [navigate]);

    const handleSignInClick = useCallback(() => {
        navigate("/signin");
    }, [navigate]);

    return {
        handleSignUpClick,
        handleSignInClick
    };
};

export default useBtnsOnLogout;