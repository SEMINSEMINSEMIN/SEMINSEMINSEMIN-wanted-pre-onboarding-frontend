import ButtonSvgWrapper from "./buttonSvg.style";

export default function ButtonSvg(props) {
    return (
        <ButtonSvgWrapper>
            <span className="ir">{props.description}</span>
            {props.children}
        </ButtonSvgWrapper>
    );
}
