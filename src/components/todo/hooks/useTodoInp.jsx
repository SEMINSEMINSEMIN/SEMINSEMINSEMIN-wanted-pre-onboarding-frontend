import { useState, useCallback, useEffect } from "react";

const useTodoInp = () => {
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

    const handleBtnClick = useCallback(() => {
        console.log("추가 버튼 클릭됨");
    }, []);

    return { inpValue, handleInpChange, isBtnAble, handleBtnClick };
};

export default useTodoInp;