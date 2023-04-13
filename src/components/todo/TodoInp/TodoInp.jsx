import React from "react";
import TodoInpCont from "./todoInp.style";

const TodoInp = React.forwardRef((props, ref) => {
    return (
        <TodoInpCont onSubmit={props.handleInpSubmit}>
            <input 
                ref={ref}
                type="text"
                data-testid="new-todo-input" 
                placeholder="할 일 목록 추가하기"
                onChange={props.handleInpChange} 
            />
            <button 
                type="submit"
                data-testid="new-todo-add-button" 
                disabled={!props.isBtnAble}
            >
                추가
            </button>
        </TodoInpCont>
    );
});

export default TodoInp;
