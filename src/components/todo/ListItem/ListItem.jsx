import Modal from "../../common/Modal/Modal";
import ListItemCont from "./listItem.style";
import Item from "../Item/Item";
import useRemove from "../hooks/useRemove";
import useCheckbox from "../hooks/useCheckbox";

export default function ListItem(props) {
    const { isCompleted, todo, inpId, renderOnDelete } = props;
    const {
        isModalShown,
        hideModal,
        handleRemoveIconClick,
        handleDeleteConfirm,
    } = useRemove(renderOnDelete);
    const { isChecked, handleCbClick } = useCheckbox(isCompleted);
    return (
        <>
            {isModalShown && (
                <Modal
                    msg={"해당 할 일을 삭제할까요?"}
                    buttonRight={
                        <button onClick={() => handleDeleteConfirm(inpId)}>
                            삭제
                        </button>
                    }
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
                <Item
                    isChecked={isChecked}
                    todo={todo}
                    inpId={inpId}
                    handleRemoveIconClick={handleRemoveIconClick}
                />
            </ListItemCont>
        </>
    );
}
