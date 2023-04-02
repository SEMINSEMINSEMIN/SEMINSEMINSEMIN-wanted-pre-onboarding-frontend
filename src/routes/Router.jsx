import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loading from "../components/common/Loading/Loading";
import useLoginCheck from "../hooks/useLoginCheck";
const Home = lazy(() => import("../pages/Home"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn"));
const Todo = lazy(() => import("../pages/Todo"));

export default function Router() {
    const isLoggedIn = useLoginCheck();

    return (
        <BrowserRouter basename="">
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/signup"
                        element={
                            isLoggedIn ? <Navigate to="/todo" /> : <SignUp />
                        }
                    />
                    <Route
                        path="/signin"
                        element={
                            isLoggedIn ? <Navigate to="/todo" /> : <SignIn />
                        }
                    />
                    <Route
                        path="/todo"
                        element={
                            isLoggedIn ? <Todo /> : <Navigate to="/signin" />
                        }
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
