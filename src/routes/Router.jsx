import React, { Suspense, lazy, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loading from "../components/common/Loading/Loading";
import AuthContext from "../context/AuthContext";

const Home = lazy(() => import("../pages/Home"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn"));
const Todo = lazy(() => import("../pages/Todo"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function Router() {
    const ctx = useContext(AuthContext);

    return (
        <BrowserRouter basename="">
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/signup"
                        element={
                            ctx.isLoggedIn ? (
                                <Navigate to="/todo" />
                            ) : (
                                <SignUp />
                            )
                        }
                    />
                    <Route
                        path="/signin"
                        element={
                            ctx.isLoggedIn ? (
                                <Navigate to="/todo" />
                            ) : (
                                <SignIn />
                            )
                        }
                    />
                    <Route
                        path="/todo"
                        element={
                            ctx.isLoggedIn ? (
                                <Todo />
                            ) : (
                                <Navigate to="/signin" />
                            )
                        }
                    />
                    <Route
                        path="/*"
                        element={<NotFound />}
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
