import TodoInpCont from "./todoInp.style";

export default function TodoInp(props) {
    return (
        <TodoInpCont>
            <input 
                type="text" 
                value={props.inpValue}
                onChange={props.handleInpChange}
                data-testid="new-todo-input" 
                placeholder="할 일 목록 추가하기" 
            />
            <button 
                data-testid="new-todo-add-button" 
                onClick={props.handleBtnClick}
                disabled={!props.isBtnAble}
            >
                추가
            </button>
        </TodoInpCont>
    );
}
