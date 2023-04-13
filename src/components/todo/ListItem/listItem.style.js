import styled from "styled-components";

const ListItemCont = styled.li`
    display: flex;
    &:not(:first-child) {
        margin-top: 4px;
    }
    & label {
        width: calc(100% - 64px);
        display: flex;
        line-height: 2rem;
        text-decoration: none;
    }
    & label::before {
        content: "";
        display: inline-block;
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        margin-right: 12px;
        border: 1px solid var(--color-solid2nd-gray);
        border-radius: 5px;
    }
    & label.checked::before {
        background-color: var(--color-main-mild);
    }
    & label span {
        width: calc(100% - 34px);
        word-wrap: break-word;
        overflow: auto;
    }
    & input[type=checkbox]:focus + label::before {
        outline: 2px solid #007bff;
    }
    & input[type=checkbox]:focus + form label::before {
        outline: 2px solid #007bff;
    }
    & label.checked > span {
        text-decoration: line-through;
    }
    & svg:hover .edit {
        fill: var(--color-edit);
    }
    & svg:hover .delete {
        fill: var(--color-text-warn);
    }
    & svg:hover .cancel {
        fill: var(--color-text-warn);
    }
    & .edit-button, & .editSubmit-button {
        margin-left: auto;
    }
    & .editSubmit-button.activated svg .edit-submit {
        fill: var(--color-edit);
    }
    & form {
        width: 100%;
        display: flex;
    }
    & .edit-input {
        box-sizing: initial;
        flex-grow: 1;
        height: 1.9rem;
        padding: 0px;
        padding-bottom: 2px;
        font-size: inherit;
        border-bottom: 1px solid var(--color-main-solid);
    }
`;

export default ListItemCont;