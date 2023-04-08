import Topbar from "../components/todo/Topbar/Topbar";
import List from "../components/todo/List/List";
import useListRender from "../components/todo/hooks/useListRender";

export default function Todo() {
    const { items } = useListRender();
    return (
        <>
            <Topbar />
            <List>{items}</List>
        </>
    );
}
