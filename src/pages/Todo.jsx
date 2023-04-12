import Topbar from "../components/todo/Topbar/Topbar";
import List from "../components/todo/List/List";
import TodoInp from "../components/todo/TodoInp/TodoInp";
import useListRender from "../components/todo/hooks/useListRender";
import useTodoInp from "../components/todo/hooks/useTodoInp";

export default function Todo() {
    const { items, addItem } = useListRender();
    const { isBtnAble, inpRef, handleInpChange, handleInpSubmit } = useTodoInp(addItem);
    return (
        <>
            <Topbar />
            <List>{items}</List>
            <TodoInp 
                ref={inpRef}
                isBtnAble={isBtnAble} 
                handleInpChange={handleInpChange}
                handleInpSubmit={handleInpSubmit}
            />
        </>
    );
}
