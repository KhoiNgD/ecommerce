import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
  0. CSS variables
*/
:root {
    --primary-color: 22deg 65% 57%;
    --secondary-color: 21deg 94% 75%;
    --primary-dark: 0deg 0% 0%;
    --secondary-dark: 0deg 0% 6%;
    --primary-white: 0deg 0% 100%;
    --secondary-white: 0deg 0% 98%;
    --grey: 0deg 0% 95%;
}
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}

html {
  font-size: 62.5%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background: hsl(var(--dark-blue));
  color: hsl(var(--white));
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

/* 
  10. Style scrollbar
*/
html {
  --scrollbar-background: hsl(210deg, 15%, 6.25%);
  --scrollbar-text: hsl(210deg, 10%, 90%);
  --scrollbar-gray-300: hsl(210deg, 10%, 40%);
  --scrollbar-gray-500: hsl(210deg, 8%, 50%);

  scrollbar-color: var(--scrollbar-gray-300) var(--scrollbar-background);
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: var(--scrollbar-background);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 1000px;
    background-color: var(--scrollbar-gray-300);
    border: 2px solid var(--scrollbar-background);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrollbar-gray-500);
  }
}
`;

export default GlobalStyles;
