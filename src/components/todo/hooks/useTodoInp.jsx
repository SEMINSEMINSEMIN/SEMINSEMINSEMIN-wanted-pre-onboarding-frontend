import { useState, useCallback, useEffect } from "react";

const useTodoInp = (setList) => {
    const [inpValue, setInpValue] = useState("");
    const [isBtnAble, setIsBtnAble] = useState(false);

    useEffect(() => {
        const identifier = setTimeout(() => {
            inpValue.length ? setIsBtnAble(true) : setIsBtnAble(false);
        }, 200);

        return () => {
            clearTimeout(identifier);
        };
    }, [inpValue]);

    const handleInpChange = useCallback((e) => {
        setInpValue(e.target.value);
    }, []);

    const handleInpSubmit = useCallback((e) => {
        e.preventDefault();
        console.log("추가 버튼 클릭됨");
        setList((prev) => {
            return [
                ...prev,
                {
                    id: prev.length + 1,
                    todo: inpValue,
                    isCompleted: false,
                    userId: prev.length + 1
                }
            ];
        });
        setInpValue("");
    }, [setList, inpValue]);

    return { inpValue, handleInpChange, isBtnAble, handleInpSubmit };
};

export default useTodoInp;