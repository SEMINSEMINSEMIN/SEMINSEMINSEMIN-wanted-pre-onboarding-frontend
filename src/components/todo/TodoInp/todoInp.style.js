import styled from "styled-components";

const TodoInpCont = styled.form`
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 18px 15px 18px 20px;
    border-top: 1px solid var(--color-mild-gray);
    background-color: white;

    & input {
        flex-grow: 1;
        height: 1.6rem;
        padding: 0;
        font-size: inherit;
    }

    & input::placeholder {
        color: var(--color-mild-gray);
    }

    & button {
        padding: 0;
        height: 1.6rem;
        color: var(--color-main-solid);
    }

    & button:disabled {
        color: var(--color-mild-gray);
    }
`;

export default TodoInpCont;