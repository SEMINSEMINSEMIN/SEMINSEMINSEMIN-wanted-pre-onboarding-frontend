import styled from "styled-components";

const ButtonSvgWrapper = styled.button`
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    vertical-align: middle;

    &.topbar {
        position: absolute;
        top: 50%;
        left: 14px;
        transform: translateY(-50%);
    }
`;

export default ButtonSvgWrapper;
