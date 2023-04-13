import Button from "../../common/Button/Button";
import BtnsCont from "./btns.style";
import useBtnsOnLogout from "../hooks/useBtnsOnLogout";

export default function BtnsOnLogout() {
    const { handleSignUpClick, handleSignInClick } = useBtnsOnLogout();
    return (
        <BtnsCont>
            <Button 
                type="button" 
                className="home gradient"
                onClick={handleSignUpClick}
            >
                회원가입
            </Button>
            <Button 
                type="button" 
                className="home"
                onClick={handleSignInClick}
            >
                로그인
            </Button>
        </BtnsCont>
    );
}
