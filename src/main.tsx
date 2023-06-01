import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./components/App";
import { COLORS } from "./constant";
import QueryProvider from "./context/QueryProvider";
import { generateCSSVarColor } from "./utils";
import { StrictMode } from "react";

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
  padding:0;
}

/*
  3. Allow percentage-based heights in the application
*/
html, body {
  
  /* --colors-dark: ${COLORS.dark}; */
  // Automatic generate CSS variables
  ${generateCSSVarColor(COLORS)}
  --step-0: clamp(0.75rem, calc(0.58rem + 0.87vw), 1.25rem);
  --step-1: clamp(1.00rem, calc(0.73rem + 1.33vw), 1.77rem);
  --step-2: clamp(1.33rem, calc(0.93rem + 2.03vw), 2.50rem);
  --step-3: clamp(1.78rem, calc(1.16rem + 3.06vw), 3.53rem);
  --step-4: clamp(2.37rem, calc(1.45rem + 4.57vw), 5.00rem);
  --step-5: clamp(3.16rem, calc(1.80rem + 6.80vw), 7.07rem);
  --step-6: clamp(4.21rem, calc(2.20rem + 10.06vw), 9.99rem);

  --space-3xs: clamp(0.19rem, calc(0.16rem + 0.13vw), 0.31rem);
  --space-2xs: clamp(0.38rem, calc(0.31rem + 0.26vw), 0.63rem);
  --space-xs: clamp(0.56rem, calc(0.47rem + 0.39vw), 0.94rem);
  --space-s: clamp(0.75rem, calc(0.63rem + 0.52vw), 1.25rem);
  --space-m: clamp(1.13rem, calc(0.94rem + 0.78vw), 1.88rem);
  --space-l: clamp(1.50rem, calc(1.26rem + 1.04vw), 2.50rem);
  --space-xl: clamp(2.25rem, calc(1.89rem + 1.55vw), 3.75rem);
  --space-2xl: clamp(3.00rem, calc(2.51rem + 2.07vw), 5.00rem);
  --space-3xl: clamp(4.50rem, calc(3.77rem + 3.11vw), 7.50rem);
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

*::-webkit-scrollbar {
  width: .5em;
}

/* Track */
*::-webkit-scrollbar-track {
  background: var(--color-dark); 
}
 
/* Handle */
*::-webkit-scrollbar-thumb {
  background: var(--color-lightDark);
  border-radius: .5em;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <GlobalStyles />
    <QueryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <App />
    </QueryProvider>
  </StrictMode>
);
