import TodoInpCont from "./todoInp.style";

export default function TodoInp(props) {
    return (
        <TodoInpCont onSubmit={props.handleInpSubmit}>
            <input 
                type="text" 
                value={props.inpValue}
                onChange={props.handleInpChange}
                data-testid="new-todo-input" 
                placeholder="할 일 목록 추가하기" 
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
}
