import { useState, useRef, useCallback } from "react";
import debounce from "../../../utils/debounce";

const useTodoInp = (setList) => {
    const [isBtnAble, setIsBtnAble] = useState(false);
    const inpRef = useRef();

    const debouncedHandleInpChange = debounce((inpValue) => {
        console.log("디바운스");
        console.log(inpValue);
        inpValue.length ? setIsBtnAble(true) : setIsBtnAble(false); 
    }, 200);

    const handleInpChange = useCallback(
        (e) => {
            console.log("inpChange");
            debouncedHandleInpChange(e.target.value);
        },
        [debouncedHandleInpChange]
    );

    const handleInpSubmit = useCallback(
        (e) => {
            e.preventDefault();
            console.log("추가 버튼 클릭됨");
            setList((prev) => {
                return [
                    ...prev,
                    {
                        id: prev.length + 1,
                        todo: inpRef.current.value,
                        isCompleted: false,
                        userId: prev.length + 1,
                    },
                ];
            });
            inpRef.current.value = "";
        },
        [setList]
    );

    return { isBtnAble, inpRef, handleInpChange, handleInpSubmit };
};

export default useTodoInp;
