import { createGlobalStyle } from "styled-components";
import GlobalBg from "./GlobalBg";
const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Courier New', Courier, monospace;
        ${GlobalBg}
    }
`;

export default GlobalStyle;