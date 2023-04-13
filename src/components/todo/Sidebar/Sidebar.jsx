import ReactDOM from "react-dom";
import BackDrop from "../../common/BackDrop/BackDrop";
import SideBarCont from "./sidebar.style";
import ButtonSvg from "../../common/Button/ButtonSvg/ButtonSvg";
import { ReactComponent as Close } from "../../../assets/icon-cancel.svg";

export default function Sidebar({ className, handleHideClick, handleLogoutClick }) {
    return (
        <>
            {ReactDOM.createPortal(
                <BackDrop 
                    className={className} 
                    onClick={handleHideClick}
                />,
                document.getElementById("backdrop-root")
            )}
            <SideBarCont className={className}>
                <div className="top">
                    <h2>바로가기</h2>
                    <ButtonSvg
                        description="바로가기 닫기"
                        onClick={handleHideClick}
                    >
                        <Close width="24" height="24" fill="#767676" />
                    </ButtonSvg>
                </div>
                <div className="bottom">
                    <a className="item home" href="/">
                        홈
                    </a>
                    <button 
                        className="item logout"
                        onClick={handleLogoutClick}
                    >로그아웃</button>
                </div>
            </SideBarCont>
        </>
    );
}
