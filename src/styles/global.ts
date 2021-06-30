import { createGlobalStyle } from 'styled-components';

import rickAndMortyBackground from '../assets/rick-and-morty-background.svg';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #F0f0f5 url(${rickAndMortyBackground}) no-repeat;
        background-size: cover;
        -webkit-font-smoothing: antialiased;
        background-position-y: center;
        height: 88vh;
    }

    body, input, button {
        font: 16px Manrope, sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`;
