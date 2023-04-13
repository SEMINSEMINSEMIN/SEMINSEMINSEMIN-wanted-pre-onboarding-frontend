import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Img404 from "../assets/icon-404.png";
import Img404_2 from "../assets/icon-404-2.png";

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & p {
        margin-top: 37px;
    }

    & button {
        margin-top: 47px;
        padding: 15px 52px;
        border: 2px solid black;
        border-radius: 5px;
    }
    & button:hover {
        background-color: var(--color-main-mild-side);
    }
`;

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <h1>
                <img
                    src={Img404}
                    alt="404 페이지"
                    srcSet={`
                        ${Img404} 1x,
                        ${Img404_2} 2x
                    `}
                />
            </h1>
            <p>찾을 수 없는 페이지 입니다.</p>
            <button onClick={() => navigate("/")}>홈으로 이동</button>
        </Wrapper>
    );
}
