import { useState, useRef, useCallback } from "react";
import debounce from "../../../utils/debounce";

const useTodoInp = (listUpdate) => {
    const [isBtnAble, setIsBtnAble] = useState(false);
    const inpRef = useRef();

    const debouncedHandleInpChange = debounce((inpValue) => {
        inpValue.length ? setIsBtnAble(true) : setIsBtnAble(false); 
    }, 100);

    const handleInpChange = useCallback(
        (e) => {
            debouncedHandleInpChange(e.target.value);
        },
        [debouncedHandleInpChange]
    );

    const handleInpSubmit = useCallback(
        (e) => {
            e.preventDefault();
            console.log("추가 버튼 클릭됨");
            const newItem = {
                todo: inpRef.current.value,
                isCompleted: false,
            };
            listUpdate(newItem);
            setIsBtnAble(false);
            inpRef.current.value = "";
        },
        [listUpdate]
    );

    return { isBtnAble, inpRef, handleInpChange, handleInpSubmit };
};

export default useTodoInp;
