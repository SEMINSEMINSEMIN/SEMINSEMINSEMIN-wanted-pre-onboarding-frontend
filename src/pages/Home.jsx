import React, { useContext } from "react";
import Logo from "../components/home/Logo/Logo";
import BtnsOnLogIn from "../components/home/BtnsOnLogin/BtnsOnLogIn";
import BtnsOnLogout from "../components/home/BtnsOnLogout/BtnsOnLogout";
import AuthContext from "../context/AuthContext";

export default function Home() {
    const ctx = useContext(AuthContext);

    return (
        <>
            <Logo />
            {ctx.isLoggedIn ? (
                <BtnsOnLogIn handleLogoutClick={ctx.onLogout} />
            ) : (
                <BtnsOnLogout />
            )}
        </>
    );
}
