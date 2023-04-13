import { useState, useEffect, useReducer, useCallback, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "./use-http";
import AuthContext from "../context/AuthContext";

const emailReducer = (state, action) => {
    return action.type === "notUnique" ? 
        { value: state.value, isValid: false } : 
        { value: action.val, isValid: action.val.includes("@") };
};

const passwordReducer = (state, action) => {
    return action.type === "loginDenied" ? 
        { value: state.value, isValid: false } :
        { value: action.val, isValid: action.val.length >= 8 };
};

export default function useValidityCheck() {
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });

    const [pwState, dispatchPw] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const { value: emailValue, isValid: emailIsValid } = emailState;
    const { value: pwValue, isValid: pwIsValid } = pwState;

    const warnEmailRef = useRef();
    const warnPwRef = useRef();

    const sendRequest = useHttp();
    const navigate = useNavigate();
    const ctx = useContext(AuthContext);

    useEffect(() => {
        const identifier = setTimeout(() => {
            setIsFormValid(emailIsValid && pwIsValid);
        }, 300);

        return () => {
            clearTimeout(identifier);
        };
    }, [emailIsValid, pwIsValid]);

    const emailChangeHandler = useCallback((e) => {
        if (warnEmailRef.current.textContent !== '이메일은 "@"을 포함해야 합니다.') {
            warnEmailRef.current.textContent = '이메일은 "@"을 포함해야 합니다.';
        }
        dispatchEmail({ val: e.target.value });
    }, []);

    const pwChangeHandler = useCallback((e) => {
        if (warnPwRef.current.textContent !== "비밀번호는 8자 이상이어야 합니다.") {
            warnPwRef.current.textContent = "비밀번호는 8자 이상이어야 합니다.";
        }
        dispatchPw({ val: e.target.value });
    }, []);

    const submitHandler = useCallback((e, type) => {
        e.preventDefault();
        const reqConfig = {
            method: "POST",
            URL: type === "signup" ? "/auth/signup" : "/auth/signin",
            data: {
                email: emailValue,
                password: pwValue
            },
            headers: {
                "Content-Type": "application/json"
            }
        };

        const handleSignupResponse = (res) => {
            if (res.status === 201) {
                navigate("/signin");
            }
        };

        const handleLoginResponse = (res) => {
            if (res.status === 200) {
                ctx.onLogin(res.data.access_token);
            }
        };

        const handleSignupError = (err) => {
            const errMsg = err.response.data.message || "Something went wrong";
            warnEmailRef.current.textContent = errMsg;
            dispatchEmail({ type: "notUnique" });
        };

        const handleLoginError = () => {
            warnPwRef.current.textContent = "이메일 또는 비밀번호가 일치하지 않습니다.";
            dispatchPw({ type: "loginDenied" });
        };

        const responseHandler = type === "signup" ? handleSignupResponse : handleLoginResponse;
        const errorHandler = type === "signup" ? handleSignupError : handleLoginError;

        sendRequest(reqConfig, responseHandler, errorHandler);
    }, [emailValue, pwValue, sendRequest, navigate, ctx]);

    return {
        emailValue,
        emailIsValid,
        warnEmailRef,
        pwValue,
        pwIsValid,
        warnPwRef,
        isFormValid,
        emailChangeHandler,
        pwChangeHandler,
        submitHandler
    };
}
