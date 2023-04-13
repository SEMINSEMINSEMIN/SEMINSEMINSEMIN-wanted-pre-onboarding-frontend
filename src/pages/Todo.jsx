import Topbar from "../components/todo/Topbar/Topbar";
import Sidebar from "../components/todo/Sidebar/Sidebar";
import List from "../components/todo/List/List";
import TodoInp from "../components/todo/TodoInp/TodoInp";
import useSidebar from "../components/todo/hooks/useSidebar";
import useListRender from "../components/todo/hooks/useListRender";
import useTodoInp from "../components/todo/hooks/useTodoInp";

export default function Todo() {
    const { isSidebarHidden, handleShowClick, handleHideClick, handleLogoutClick } = useSidebar();
    const { items, addItem } = useListRender();
    const { isBtnAble, inpRef, handleInpChange, handleInpSubmit } = useTodoInp(addItem);
    return (
        <>
            <Topbar 
                handleShowClick={handleShowClick}
            />
            <Sidebar 
                className={isSidebarHidden ? "hidden" : ""} 
                handleHideClick={handleHideClick}
                handleLogoutClick={handleLogoutClick}
            />
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
