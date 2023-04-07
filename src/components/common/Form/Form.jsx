import FormCont from "../FormCont/FormCont";
import UserInput from "../UserInput/UserInput";
import WarnMsg from "../WarnMsg/WarnMsg";
import Button from "../Button/Button";
import useValidityCheck from "../../../hooks/useValidityCheck";

export default function Form({ type }) {
    const {
        emailValue,
        emailIsValid,
        warnEmailRef,
        pwValue,
        pwIsValid,
        isFormValid,
        emailChangeHandler,
        pwChangeHandler,
        submitHandler,
    } = useValidityCheck();
    return (
        <FormCont onSubmit={(e) => submitHandler(e, type)}>
            <UserInput label="이메일" inputId="email">
                <input
                    id="email"
                    type="email"
                    value={emailValue}
                    onChange={emailChangeHandler}
                    data-testid="email-input"
                    placeholder="이메일 주소를 입력해 주세요."
                />
                <WarnMsg
                    className={emailIsValid === false ? "" : "hidden"}
                    ref={warnEmailRef}
                >
                    이메일은 "@"을 포함해야 합니다.
                </WarnMsg>
            </UserInput>
            <UserInput label="비밀번호" inputId="pw">
                <input
                    id="pw"
                    type="password"
                    value={pwValue}
                    onChange={pwChangeHandler}
                    data-testid="password-input"
                    placeholder="8자 이상의 비밀번호를 입력해 주세요."
                />
                <WarnMsg className={pwIsValid === false ? "" : "hidden"}>
                    비밀번호는 8자 이상이어야 합니다.
                </WarnMsg>
            </UserInput>
            <Button
                className="form-item"
                type="submit"
                data-testid={`${type}-button`}
                disabled={!isFormValid}
            >
                { type === "signup" ? "회원가입" : "로그인" }
            </Button>
        </FormCont>
    );
}
