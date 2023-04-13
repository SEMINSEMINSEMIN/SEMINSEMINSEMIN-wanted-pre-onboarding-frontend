import LogoCont from "./logo.style";
import logo from "../../../assets/logo.png";
import logo2 from "../../../assets/logo2.png";

export default function Logo() {
    return (
        <LogoCont>
            <img 
                src={logo}
                alt="To do list"
                width="223"
                srcSet={`
                    ${logo} 1x,
                    ${logo2} 2x
                `}
            />
        </LogoCont>
    );
}