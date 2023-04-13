import styled from "styled-components";

const BtnsCont = styled.div`
    padding: 0 34px 106px;
    margin-top: calc((16600 / 820) * 1vh);
    & button {
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
    & button:first-child {
        margin-bottom: 36px;
    }
    & button:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;

export default BtnsCont;