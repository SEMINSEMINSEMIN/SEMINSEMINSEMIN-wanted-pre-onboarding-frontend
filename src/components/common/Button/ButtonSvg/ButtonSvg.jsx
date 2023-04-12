import ButtonSvgWrapper from "./buttonSvg.style";

export default function ButtonSvg(props) {
    return (
        <ButtonSvgWrapper 
            className={props.className} 
            data-testid={props.testId ? props.testId : ""}
            onClick={props.onClick}
        >
            <span className="ir">{props.description}</span>
            {props.children}
        </ButtonSvgWrapper>
    );
}
