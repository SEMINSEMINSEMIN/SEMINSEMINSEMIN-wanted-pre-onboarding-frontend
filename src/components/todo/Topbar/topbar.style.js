import styled from "styled-components";

const TopbarCont = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 14px;
    background-color: var(--color-main-solid);

    & h1 {
        text-align: center;
        font-size: 2rem;
        color: white;
    }
`;

export default TopbarCont;