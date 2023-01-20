import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./components/App";
import { COLORS } from "./constants";
import { generateCSSVarColor } from "./utils";

const GlobalStyles = createGlobalStyle`
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
  /* --colors-dark: ${COLORS.dark}; */

  // Automatic generate CSS variables
  ${generateCSSVarColor(COLORS)}
  --step-0: clamp(0.75rem, calc(0.69rem + 0.26vw), 1.00rem);
  --step-1: clamp(0.90rem, calc(0.75rem + 0.62vw), 1.50rem);
  --step-2: clamp(1.08rem, calc(0.80rem + 1.21vw), 2.25rem);
  --step-3: clamp(1.30rem, calc(0.79rem + 2.15vw), 3.38rem);
  --step-4: clamp(1.56rem, calc(0.70rem + 3.63vw), 5.06rem);
  --step-5: clamp(1.87rem, calc(0.48rem + 5.93vw), 7.59rem);
}

/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Roboto', sans-serif;
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

`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
