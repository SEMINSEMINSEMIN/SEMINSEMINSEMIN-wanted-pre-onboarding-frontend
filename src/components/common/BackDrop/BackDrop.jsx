import { BackdropCont } from "./backDrop.style";

export default function BackDrop({ className, onClick }) {
    return <BackdropCont className={className} onClick={onClick} />;
}
