import Button from "../../common/Button/Button";
import useBtnsOnLogin from "../hooks/useBtnsOnLogin";

export default function BtnsOnLogIn({ handleLogoutClick }) {
    const { handleTodoClick } = useBtnsOnLogin();

    return (
        <>
            <Button
                type="button"
                className="home gradient"
                onClick={handleTodoClick}
            >
                나의 투두리스트
            </Button>
            <Button
                type="button"
                className="home"
                onClick={handleLogoutClick}
            >
                로그아웃
            </Button>
        </>
    );
}
