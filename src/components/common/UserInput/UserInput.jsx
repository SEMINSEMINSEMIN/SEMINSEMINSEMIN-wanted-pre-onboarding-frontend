import UserInputCont from "./userInput.style";

export default function UserInput(props) {
    return (
        <UserInputCont>
            <label htmlFor={props.inputId}>
                {props.label}
            </label>
            {props.children}
        </UserInputCont>
    );
}
