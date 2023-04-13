import styled from "styled-components";

const LoadingCont = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 122px;
    height: 122px;
    margin: auto;
    z-index: 999;
    background: transparent;
    transform: translate(-50%, -50%) scale(0.6);

    & .f_circleG {
        position: absolute;
        background-color: rgba(240, 240, 240, 0.85);
        opacity: 1;
        z-index: -1;
        height: 22px;
        width: 22px;
        border-radius: 11px;
    }
    & .f_circleBg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: var(--color-main-solid);
        opacity: 0;
        z-index: 1;
        border-radius: 11px;
        animation-name: f_fadeG;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-direction: normal;
    }

    & #frotateG_00 {
        left: 0;
        top: 49px;
    }

    & #frotateG_01 {
        left: 14px;
        top: 14px;
    }

    & #frotateG_02 {
        left: 49px;
        top: 0;
    }

    & #frotateG_03 {
        right: 14px;
        top: 14px;
    }

    & #frotateG_04 {
        right: 0;
        top: 49px;
    }

    & #frotateG_05 {
        right: 14px;
        bottom: 14px;
    }

    & #frotateG_06 {
        left: 49px;
        bottom: 0;
    }

    & #frotateG_07 {
        left: 14px;
        bottom: 14px;
    }
    & #circleBg_00 {
        animation-delay: 0.45s;
    }
    & #circleBg_01 {
        animation-delay: 0.6s;
    }
    & #circleBg_02 {
        animation-delay: 0.75s;
    }
    & #circleBg_03 {
        animation-delay: 0.9s;
    }
    & #circleBg_04 {
        animation-delay: 1.05s;
    }
    & #circleBg_05 {
        animation-delay: 1.2s;
    }
    & #circleBg_06 {
        animation-delay: 1.35s;
    }
    & #circleBg_07 {
        animation-delay: 1.5s;
    }

    @keyframes f_fadeG {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
`;

export default LoadingCont;
