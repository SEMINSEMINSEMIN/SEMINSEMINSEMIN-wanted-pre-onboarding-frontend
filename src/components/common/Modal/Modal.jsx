import ReactDOM from "react-dom";
import BackDrop from "../BackDrop/BackDrop";
import { ModalCont } from "./modal.style";

export default function Modal({ msg, onCancle, buttonRight }) {
    return (
        <>
            {ReactDOM.createPortal(
                <BackDrop onClick={onCancle} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalCont>
                    <h2>{msg}</h2>
                    <div className="button-group">
                        <button onClick={onCancle}>
                            취소
                        </button>
                        {buttonRight}
                    </div>
                </ModalCont>,
                document.getElementById("modal-root")
            )}
        </>
    );
}