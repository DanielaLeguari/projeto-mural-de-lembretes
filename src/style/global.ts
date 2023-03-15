import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --purple-300: #E9c5ff;
    --purple-600: #6200ee;
    --purple-900: #250059;

    --font-black: #1c1c1c;
    --font-white: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media (max-width: 720px){
        font-size: 87.5%;
    }
}

h1{
    color: var(--purple-600);
    font-family: 'Inter';
}
`