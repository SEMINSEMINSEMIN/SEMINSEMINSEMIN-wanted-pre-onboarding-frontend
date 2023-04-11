import styled from "styled-components";

const ListItemCont = styled.li`
    display: flex;
    &:not(:first-child) {
        margin-top: 4px;
    }

    & label {
        display: flex;
    }
    & label::before {
        content: "";
        display: block;
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        border: 1px solid var(--color-solid2nd-gray);
        border-radius: 5px;
    }
    & label.checked::before {
        background-color: var(--color-main-mild);
    }
    & span {
        margin: 0 12px 0 15px;
        line-height: 2rem;
        text-decoration: none;
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
    & .edit-button {
        margin-left: auto;
    }
`;

export default ListItemCont;