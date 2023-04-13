import { useCallback, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const useSidebar = () => {
    const [isSidebarHidden, setIsSidebarHidden] = useState(true);
    const ctx = useContext(AuthContext);
    const { onLogout } = ctx;
    const navigate = useNavigate();

    const handleShowClick = useCallback(() => {
        setIsSidebarHidden(false);
    }, []);
    
    const handleHideClick = useCallback(() => {
        setIsSidebarHidden(true);
    }, []);

    const handleLogoutClick = useCallback(() => {
        navigate("/");
        onLogout();
    }, [navigate, onLogout]);

    return {
        isSidebarHidden,
        handleShowClick,
        handleHideClick,
        handleLogoutClick
    };
};

export default useSidebar;