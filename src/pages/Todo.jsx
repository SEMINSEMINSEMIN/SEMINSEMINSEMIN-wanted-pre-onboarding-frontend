import Topbar from "../components/todo/Topbar/Topbar";
import List from "../components/todo/List/List";
import TodoInp from "../components/todo/TodoInp/TodoInp";
import useListRender from "../components/todo/hooks/useListRender";
import useTodoInp from "../components/todo/hooks/useTodoInp";

export default function Todo() {
    const { items } = useListRender();
    const { inpValue, handleInpChange, isBtnAble, handleBtnClick } = useTodoInp();
    return (
        <>
            <Topbar />
            <List>{items}</List>
            <TodoInp 
                inpValue={inpValue}
                handleInpChange={handleInpChange}
                isBtnAble={isBtnAble} 
                handleBtnClick={handleBtnClick} 
            />
        </>
    );
}
