import LabelOnTop from "../components/common/LabelOnTop/LabelOnTop";
import Form from "../components/common/Form/Form";

export default function SignUp() {
    return (
        <>
            <LabelOnTop>회원가입</LabelOnTop>
            <Form type="signup" />
        </>
    );
}
