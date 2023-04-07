import { useState, useEffect, useReducer, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "./use-http";

const emailReducer = (state, action) => {
    return action.type === "notUnique" ? 
        { value: state.value, isValid: false } : 
        { value: action.val, isValid: action.val.includes("@") };
};

const passwordReducer = (state, action) => {
    return { value: action.val, isValid: action.val.length >= 8 };
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

    const sendRequest = useHttp();
    const navigate = useNavigate();

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
            console.log("경고 메시지 다시 초기값으로");
            warnEmailRef.current.textContent = '이메일은 "@"을 포함해야 합니다.';
        }
        dispatchEmail({ val: e.target.value });
    }, []);

    const pwChangeHandler = useCallback((e) => {
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

        let responseHandler;
        if (type === "signup") {
            responseHandler = (res) => {
                res.status === 201 && navigate("/signin");
            };
        }

        let errorHandler;
        if (type === "signup") {
            errorHandler = (err) => {
                const errMsg = err.response.data.message;
                warnEmailRef.current.textContent = errMsg;
                dispatchEmail({ type: "notUnique" });
            };
        }

        sendRequest(reqConfig, responseHandler, errorHandler);
    }, [emailValue, pwValue, sendRequest, navigate]);

    return {
        emailValue,
        emailIsValid,
        warnEmailRef,
        pwValue,
        pwIsValid,
        isFormValid,
        emailChangeHandler,
        pwChangeHandler,
        submitHandler
    };
}
