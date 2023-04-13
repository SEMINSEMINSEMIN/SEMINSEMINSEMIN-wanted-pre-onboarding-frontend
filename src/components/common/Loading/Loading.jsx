import ReactDOM from "react-dom";
import LoadingCont from "./loading.style";
import useGetCircles from "./hooks/useGetCircles";

export default function Loading() {
    const circles = useGetCircles();
    return (
        <>
            {ReactDOM.createPortal(
                <LoadingCont>
                    {circles}
                </LoadingCont>,
                document.getElementById("modal-root")
            )}
        </>
    );
}
