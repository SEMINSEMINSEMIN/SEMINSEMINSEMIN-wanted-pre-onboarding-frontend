import FormCont from "../../common/FormCont/FormCont";
import UserInput from "../../common/UserInput/UserInput";
import WarnMsg from "../../common/WarnMsg/warnMsg";
import Button from "../../common/Button/Button";

export default function SignUpForm() {
    return (
        <FormCont>
            <UserInput label="이메일" inputId="email">
                <input id="email" type="email" data-testid="email-input" placeholder="이메일 주소를 입력해 주세요." />
                <WarnMsg>동일한 이메일이 이미 존재합니다.</WarnMsg>
            </UserInput>
            <UserInput label="비밀번호" inputId="pw">
                <input id="pw" type="password" data-testid="password-input" placeholder="8자 이상의 비밀번호를 입력해 주세요." />
                <WarnMsg>비밀번호는 8자 이상이어야 합니다.</WarnMsg>
            </UserInput>
            <Button className="form-item" data-testid="signup-button" disabled>회원가입</Button>
        </FormCont>
    );
}
