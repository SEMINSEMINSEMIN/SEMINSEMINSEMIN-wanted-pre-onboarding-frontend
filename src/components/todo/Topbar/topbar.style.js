import styled from "styled-components";

const TopbarCont = styled.header`
    display: flex;
    align-items: center;
    padding: 14px;
    background-color: var(--color-main-solid);

    & h1 {
        order: 2;
        margin: 0 auto;
        font-size: 2rem;
        color: white;
    }
`;

export default TopbarCont;