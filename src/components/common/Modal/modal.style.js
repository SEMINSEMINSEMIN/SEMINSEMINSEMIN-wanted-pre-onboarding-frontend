import styled from "styled-components";

export const ModalCont = styled.article`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background-color: white;
    z-index: 200;

    & h2 {
        padding: 22px 43px;
        border-bottom: 0.5px solid #dbdbdb;
        font-size: 1.6rem;
        line-height: 2rem;
        font-weight: 500;
        text-align: center;
    }

    & .button-group > * {
        display: inline-block;
        width: 50%;
        padding-top: 14px;
        padding-bottom: 14px;
        text-align: center;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.8rem;
        background-color: transparent;
    }

    & .button-group :nth-child(1) {
        border-right: 0.5px solid #dbdbdb;
        color: var(--color-text-warn);
        border-radius: 0px 0px 0px 10px;
    }
    & button {
        border-radius: 0px 0px 10px 0px;
        &:hover{
            background-color: var(--color-main-mild-side);
            font-weight: bold;
        }
    }
`;