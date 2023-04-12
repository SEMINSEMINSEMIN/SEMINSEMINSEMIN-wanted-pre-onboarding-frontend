import styled from "styled-components";

const ListItemCont = styled.li`
    display: flex;
    &:not(:first-child) {
        margin-top: 4px;
    }
    & label {
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
    & input:focus + label::before {
        outline: 2px solid #007bff;
    }
    & label.checked {
        text-decoration: line-through;
    }
    & svg:hover .edit {
        fill: var(--color-edit);
    }
    & svg:hover .delete {
        fill: var(--color-text-warn);
    }
    & .edit-button {
        margin-left: auto;
    }
`;

export default ListItemCont;