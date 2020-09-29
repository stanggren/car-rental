import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        /* height: 100%; */
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${props => props.theme.fonts.family._roboto};
    }
`;

export default GlobalStyle;