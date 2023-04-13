import { useState } from "react";
import ButtonSvg from "../../common/Button/ButtonSvg/ButtonSvg";
import { ReactComponent as Edit } from "../../../assets/icon-edit.svg";
import { ReactComponent as Delete } from "../../../assets/icon-delete.svg";
import { ReactComponent as EditSubmit } from "../../../assets/icon-editSubmit.svg";
import { ReactComponent as Cancel } from "../../../assets/icon-cancel.svg";
import useEdit from "../hooks/useEdit";

export default function Item(props) {
    const { isChecked, todo, inpId, handleRemoveIconClick } = props;
    const [todoValue, setTodoValue] = useState(todo);
    const [todoOnEdit, setTodoOnEdit] = useState(todo);
    const {
        isSubmitAble, 
        isOnEdit, 
        handleEditIconClick,
        handleCancelIconClick,
        handleInpChange,
        handleSubmit
    } = useEdit(setTodoValue, todoOnEdit, setTodoOnEdit, isChecked);

    if (!isOnEdit) {
        return (
            <>
                <label
                    className={isChecked ? "checked" : ""}
                    htmlFor={`cb${inpId}`}
                >
                    <span>{todoValue}</span>
                </label>
                <ButtonSvg
                    className="edit-button"
                    description="수정"
                    testId="modify-button"
                    onClick={handleEditIconClick}
                >
                    <Edit width="24" height="24" fill="#767676" />
                </ButtonSvg>
                <ButtonSvg
                    description="삭제"
                    testId="delete-button"
                    onClick={handleRemoveIconClick}
                >
                    <Delete width="24" height="24" fill="#767676" />
                </ButtonSvg>
            </>
        );
    } else {
        return (
            <>
                <form className="edit-form" onSubmit={(e) => handleSubmit(e, inpId)}>
                    <label className={isChecked ? "checked" : ""}>
                        <input 
                            type="text" 
                            data-testid="modify-input"
                            value={todoOnEdit}
                            onChange={handleInpChange}
                            className="edit-input"
                        />
                    </label>
                    <ButtonSvg
                        className={`editSubmit-button ${isSubmitAble ? "activated" : ""}`}
                        description="수정 내용 제출"
                        testid="submit-button"
                        type="submit"
                        isDisabled={!isSubmitAble}
                    >
                        <EditSubmit width="24" height="24" fill="#767676" />
                    </ButtonSvg>
                    <ButtonSvg
                        description="수정 취소"
                        testid="cancel-button"
                        onClick={handleCancelIconClick}
                    >
                        <Cancel width="24" height="24" fill="#767676" />
                    </ButtonSvg>
                </form>
            </>
        );
    }
}
