import Modal from "../../common/Modal/Modal";
import ListItemCont from "./listItem.style";
import ButtonSvg from "../../common/Button/ButtonSvg/ButtonSvg";
import { ReactComponent as Edit } from "../../../assets/icon-edit.svg";
import { ReactComponent as Delete } from "../../../assets/icon-delete.svg";
import useRemove from "../hooks/useRemove";
import useCheckbox from "../hooks/useCheckbox";

export default function ListItem(props) {
    const { isCompleted, todo, inpId, renderOnDelete } = props;
    const { isModalShown, hideModal, handleRemoveIconClick, handleDeleteConfirm } = useRemove(renderOnDelete);
    const { isChecked, handleCbClick } = useCheckbox(isCompleted);
    return (
        <>
            {isModalShown && (
                <Modal
                    msg={"해당 할 일을 삭제할까요?"}
                    buttonRight={<button onClick={() => handleDeleteConfirm(inpId)}>삭제</button>}
                    onCancle={hideModal}
                />
            )}
            <ListItemCont>
                <input
                    id={`cb${inpId}`}
                    onChange={() => handleCbClick(inpId, todo, isCompleted)}
                    className="ir"
                    type="checkbox"
                    checked={isChecked}
                />
                <label
                    className={isChecked ? "checked" : ""}
                    htmlFor={`cb${inpId}`}
                >
                    {todo}
                </label>
                <ButtonSvg
                    className="edit-button"
                    description="수정"
                    testId="modify-button"
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
            </ListItemCont>
        </>
    );
}
