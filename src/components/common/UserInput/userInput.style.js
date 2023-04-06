import styled from "styled-components";

const UserInputCont = styled.div`
    display: flex;
    flex-direction: column;
    & label {
        font-size: 1.2rem;
        line-height: 1.7rem;
        color: var(--color-solid2nd-gray);
    }
    & input {
        margin-top: 10px;
        padding: 0 0 8px;
        border-bottom: 1px solid var(--color-mild-gray);
        font-size: 1.4rem;
    }
    & input:focus {
        outline: none;
        border-color: var(--color-main-solid);
    }
`;

export default UserInputCont;