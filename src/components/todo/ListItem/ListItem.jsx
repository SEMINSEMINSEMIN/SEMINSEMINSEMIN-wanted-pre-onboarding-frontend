import ListItemCont from "./listItem.style";
import ButtonSvg from "../../common/Button/ButtonSvg/ButtonSvg";
import { ReactComponent as Edit } from "../../../assets/icon-edit.svg";
import { ReactComponent as Delete } from "../../../assets/icon-delete.svg";
import useCheckbox from "../hooks/useCheckbox";

export default function ListItem(props) {
    const { isCompleted, todo, inpId } = props;
    const { isChecked, handleCbClick } = useCheckbox(isCompleted);
    return (
        <ListItemCont>
            <input 
                id={`cb${inpId}`} 
                onClick={() => handleCbClick(inpId, todo, isCompleted)} 
                className="ir" 
                type="checkbox" 
            />
            <label 
                className={isChecked ? "checked" : ""} 
                htmlFor={`cb${inpId}`}
            >
                <span>{todo}</span>
            </label>
            <ButtonSvg className="edit-button" description="수정" testId="modify-button">
                <Edit width="24" height="24" fill="#767676" />
            </ButtonSvg>
            <ButtonSvg description="삭제" testId="delete-button">
                <Delete width="24" height="24" fill="#767676" />
            </ButtonSvg>
        </ListItemCont>
    );
}
