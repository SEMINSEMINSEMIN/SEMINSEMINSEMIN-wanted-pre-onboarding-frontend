import ButtonSvgWrapper from "./buttonSvg.style";

export default function ButtonSvg(props) {
    return (
        <ButtonSvgWrapper 
            className={props.className}
            type={props.type || "button"}
            data-testid={props.testId ? props.testId : ""}
            onClick={props.onClick}
            disabled={props.isDisabled || false}
        >
            <span className="ir">{props.description}</span>
            {props.children}
        </ButtonSvgWrapper>
    );
}
