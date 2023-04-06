import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    height: 4.4rem;
    border-radius: 44px;
    &.home {
        border: 1px solid var(--color-mild-gray);
        color: var(--color-solid-gray);
    }
    &.home.gradient {
        color: white;
        background: linear-gradient(90deg, rgba(239, 213, 255, 0.79) 0%, rgba(81, 90, 218, 0.94) 50%, rgba(39, 46, 154, 0.94) 90.63%);
    }
    &.form-item {
        color: white;
        background-color: var(--color-main-solid);
    }
    :disabled {
        background-color: var(--color-main-mild);
    }
`;

export default Button;