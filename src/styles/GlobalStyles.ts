import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`:root {

    --color-primary-white: #fff; 
    --color-primary-black: #000;
    --color-background-primary: #F4F5F9; 
    --color-background-accent: #42567A; 
    --color-border-light: rgba(66, 86, 122, 0.1); 
    --color-border-medium: rgba(66, 86, 122, 0.2);
    --color-border-strong: rgba(66, 86, 122, 0.4);
    --color-border-accent: rgba(48, 62, 88, 0.5); 
    --color-border-bold: rgba(66, 86, 122, 0.5);
    --color-text-heading-primary: #3877EE; 
    --color-text-heading-secondary: #ef5da8; 

    --color-shadow-middle: rgba(56, 119, 238, 0.1);

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    
      transition: background-color 0.3s, border 0.3s;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
      font-family: "PT Sans", sans-serif;
      transition: color 0.3s, background-color 0.3s;
      min-height: 100vh;
      line-height: 1.5;
      font-size: 1.6rem;
    }
    
    input,
    button,
    textarea,
    select {
      font: inherit;
    }
    
    button {
      cursor: pointer;
    }
    
    *:disabled {
      cursor: not-allowed;
    }
}`;

export default GlobalStyles;
