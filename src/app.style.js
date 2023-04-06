import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --color-main-solid: #5B4A92;
        --color-main-mild: #E1CAEF;
        --color-main-mild-side: #E1DDF4;
        --color-solid-gray: #767676;
        --color-mild-gray: #DBDBDB;
        --color-text-main: #000000;
        --color-text-warn: #E41B3F;
    }

    * {
        box-sizing: border-box;
        color: var(--color-text-main);
    }

    html {
        font-size: 62.5%;
    }

    button {
        border: none;
        cursor: pointer;
        :disabled {
            cursor: not-allowed;
        }
    }

    a {
        text-decoration: none;
    }

    .hidden {
        display: none;
    }

    .ir {
        position: absolute;
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
        overflow: hidden;
    }
`;
