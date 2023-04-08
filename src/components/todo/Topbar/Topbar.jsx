import React from "react";
import TopbarCont from "./topbar.style";
import ButtonSvg from "../../common/Button/ButtonSvg/ButtonSvg";
import { ReactComponent as Hamburger } from "../../../assets/icon-hamburger.svg";

export default function Topbar() {
    return (
        <TopbarCont>
            <h1>To do List</h1>
            <ButtonSvg className="topbar" description="사이드 바 토글">
                <Hamburger width="32" height="32" fill="white" />
            </ButtonSvg>
            <nav className="hidden">
                <a href="/">홈</a>
                <a href="/">로그아웃</a>
            </nav>
        </TopbarCont>
    );
}
