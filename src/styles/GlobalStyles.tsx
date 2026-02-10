import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


:focus,
:active {
    outline: none;
}
a:focus,
a:active {
    outline: none;
}

nav,
footer,
header,
aside {
    display: block;
}

html,
body {
    font-family: "Sora", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ,sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    letter-spacing: 0.035em;
    line-height: 1.2;
    margin: 0;
    height: 100%;
    width: 100%;
    min-height: 100%;
    font-size: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    overflow-x: clip;
    overflow-y: initial;
}

body::selection {
    color: ${theme.colors.primary.primaryBg};
    background-color: ${theme.colors.accent};
}

input,
button,
textarea {
    background: transparent;
    font-family: inherit;
    font-size: 100%;
    padding: 0;
    border: none;

}

textarea {
    resize: none;
}
input::-ms-clear {
    display: none;
}
button {
    cursor: pointer;
}
button::-moz-focus-inner {
    padding: 0;
    border: 0;
}
a{
    cursor: pointer;
}
a,
a:visited {
    text-decoration: none;
}
a:hover {
    text-decoration: none;
}
ul {
    list-style-type: none;
}
img {
    max-width: 100%;
    display: block;
}

h1,
h2,
h3,
h4 {
    font-weight: inherit;
}

section {
    padding: 60px 0;

    @media ${theme.media.md} {
        padding: 40px 0;
    }
}

p {
    font-size: 16px;
    line-height: 1.5;
}
`;
