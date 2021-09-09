import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-transform: none;
        outline: none;
        border: none;
        text-transform: capitalize;
        transition: all 0.2s linear;
    }
`;

export default GlobalStyles;
