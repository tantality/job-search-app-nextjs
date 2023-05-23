import { Inter } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const inter = Inter({ subsets: ['latin'] });

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}


ul,
  ol {
  padding: 0;
}


body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
  margin: 0;
}

html {
  margin-left: calc(100vw - 100%);
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  font-family: ${inter.style.fontFamily}; 
  line-height: 1.5;
}


ul,
  ol {
  list-style: none;
}


a: not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  max-width: 100 %;
  display: block;
}

article >* +* {
  margin-top: 1em;
}

input,
  button,
  textarea,
  select {
  font: inherit;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
}


html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}

fieldset, legend{
  margin: 0;
  padding: 0;
  border: none;
}

legend {
  display:contents;
}
`;
