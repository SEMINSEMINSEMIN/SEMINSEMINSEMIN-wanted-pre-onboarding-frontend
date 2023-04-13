import styled from "styled-components";

const LogoCont = styled.h1`
    padding-top: calc((26100 / 820) * 1vh);
    text-align: center;

    @media only screen and (max-height: 675px) {
        padding-top: calc((15000 / 675) * 1vh);
    }
`;

export default LogoCont;