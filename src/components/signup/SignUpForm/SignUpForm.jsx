import FormCont from "../../common/FormCont/FormCont";
import UserInput from "../../common/UserInput/UserInput";
import WarnMsg from "../../common/WarnMsg/warnMsg";
import Button from "../../common/Button/Button";
import useValidityCheck from "../../../hooks/useValidityCheck";

export default function SignUpForm() {
    const {
        emailValue,
        emailIsValid,
        pwValue,
        pwIsValid,
        isFormValid,
        emailChangeHandler,
        pwChangeHandler,
    } = useValidityCheck();
    return (
        <FormCont>
            <UserInput label="이메일" inputId="email">
                <input
                    id="email"
                    type="email"
                    value={emailValue}
                    onChange={emailChangeHandler}
                    data-testid="email-input"
                    placeholder="이메일 주소를 입력해 주세요."
                />
                <WarnMsg className={emailIsValid === false ? "" : "hidden"}>이메일은 "@"을 포함해야 합니다.</WarnMsg>
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
                <WarnMsg className={pwIsValid === false ? "" : "hidden"}>비밀번호는 8자 이상이어야 합니다.</WarnMsg>
            </UserInput>
            <Button
                className="form-item"
                data-testid="signup-button"
                disabled={!isFormValid}
            >
                회원가입
            </Button>
        </FormCont>
    );
}
