import LabelOnTop from "../components/common/LabelOnTop/LabelOnTop";
import Form from "../components/common/Form/Form";

export default function SignIn() {
    return (
        <>
            <LabelOnTop>로그인</LabelOnTop>
            <Form type="signin" />
        </>
    );
}
