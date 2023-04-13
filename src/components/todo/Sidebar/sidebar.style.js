import styled from "styled-components";
import Home from "../../../assets/icon-home.svg";
import Logout from "../../../assets/icon-logout.svg";

const SideBarCont = styled.aside`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: calc((25000 / 390) * 1vw);
    max-width: 300px;
    z-index: 30;
    border-right: 1px solid var(--color-solid1st-gray);
    background-color: white;
    & .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: var(--color-main-mild-side)
    }
    & .top h2 {
        font-size: 2rem;
        font-weight: 700;
    }
    & .top button {
        flex-shrink: 0;
        align-items: center;
    }
    & svg:hover .cancel {
        fill: var(--color-main-solid);
    }
    & .bottom {
        padding: 28px 20px;
    }
    & .bottom .item {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 5px;
        color: var(--color-main-solid);
        font-size: 1.6rem;
        line-height: 2rem;
    }
    & .bottom .item::before {
        content: "";
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 15px;
    }
    & .bottom .item:hover {
        background-color: var(--color-main-mild-side);
        border-radius: 5px;
    }
    & .bottom .item.home::before {
        height: 28px;
        background: url(${Home}) no-repeat;
    }
    & .bottom .item.logout {
        margin-top: 30px;
        text-align: start;
    }
    & .bottom .item.logout::before {
        background: url(${Logout}) no-repeat;
    }
`;

export default SideBarCont;