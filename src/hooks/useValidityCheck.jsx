import { useState, useEffect, useReducer, useCallback} from "react";

const emailReducer = (state, action) => {
    return { value: action.val, isValid: action.val.includes("@") };
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

    useEffect(() => {
        const identifier = setTimeout(() => {
            setIsFormValid(
                emailIsValid && pwIsValid
            );
        }, 300);

        return () => {
            clearTimeout(identifier);
        };
    }, [emailIsValid, pwIsValid]);

    const emailChangeHandler = useCallback((e) => {
        dispatchEmail({ val: e.target.value });
    }, []);

    const pwChangeHandler = useCallback((e) => {
        dispatchPw({ val: e.target.value });
    }, []);

    return {
        emailValue,
        emailIsValid,
        pwValue,
        pwIsValid,
        isFormValid,
        emailChangeHandler,
        pwChangeHandler
    };
}
