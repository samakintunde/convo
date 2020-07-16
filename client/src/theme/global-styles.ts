import { createGlobalStyle } from "styled-components";
import BREAKPOINT from "./breakpoint";
import resets from "./resets";
import { remCalc } from "./utils";

export const GlobalStyles = createGlobalStyle`
  :root {
    /* COLOR */
    --brand-100: #D0EDFF;
    --brand-200: #A1D7FF;
    --brand-300: #72BDFF;
    --brand-400: #4EA5FF;
    --brand-500: #147DFF;
    --brand-600: #0E60DB;
    --brand-700: #0A47B7;
    --brand-800: #063293;
    --brand-900: #03237A;

    --gray-100: #F2F5FA;
    --gray-200: #E6EBF2;
    --gray-300: #C8D4E6;
    --gray-400: #A1AEC2;
    --gray-500: #8FA3BF;
    --gray-600: #7289AB;
    --gray-700: #597196;
    --gray-800: #425C82;
    --gray-900: #2E476E;

    --black: #000000;
    --white: #FFFFFF;

    --danger: #FF583A;
    --warning: #FFB200;
    --success: #73C42D;
    --info: #3DB7FF;

    /* SPACING */
    --space-unit: 1rem;
    --spacing-xxxs : calc(0.125 * var(--space-unit));
    --spacing-xxs : calc(0.25 * var(--space-unit));
    --spacing-xs : calc(0.5 * var(--space-unit));
    --spacing-sm : calc(0.75 * var(--space-unit));
    --spacing-md : calc(1 * var(--space-unit));
    --spacing-lg : calc(1.5 * var(--space-unit));
    --spacing-xl : calc(2 * var(--space-unit));
    --spacing-xxl : calc(4 * var(--space-unit));
    --spacing-xxxl : calc(6.75 * var(--space-unit));

    /* TYPOGRPAPHY */
    --h1-size: ${remCalc(48)};
    --h2-size: ${remCalc(40)};
    --h3-size: ${remCalc(36)};
    --h4-size: ${remCalc(28)};
    --h5-size: ${remCalc(24)};
    --h6-size: ${remCalc(20)};
    --body-large-size: ${remCalc(18)};
    --body-regular-size: ${remCalc(16)};
    --body-small-size: ${remCalc(14)};

    /* GRID */
    --grid-container: ${remCalc(800)};
    
    @media screen and (min-width: ${remCalc(BREAKPOINT.desktop)}) {
      /* TYPOGRPAPHY */
      --h1-size: ${remCalc(74)};
      --h2-size: ${remCalc(58)};
      --h3-size: ${remCalc(46)};
      --h4-size: ${remCalc(36)};
      --h5-size: ${remCalc(30)};
      --h6-size: ${remCalc(24)};
      --body-large-size: ${remCalc(18)};
      --body-regular-size: ${remCalc(16)};
      --body-small-size: ${remCalc(12)};

      /* GRID */
      --grid-container: ${remCalc(1024)};
    }
  }
  /* FONTS */
  /* Gilroy */
  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Medium'), local('Gilroy-Medium'),
        url('./assets/fonts/Gilroy/Gilroy-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy SemiBold'), local('Gilroy-SemiBold'),
        url('./assets/fonts/Gilroy/Gilroy-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Bold'), local('Gilroy-Bold'),
        url('./assets/fonts/Gilroy/Gilroy-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  /* Work Sans */
  @font-face {
    font-family: 'Work Sans';
    src: local('WorkSans Bold'), local('WorkSans-Bold'),
        url('./assets/fonts/WorkSans/WorkSans-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Work Sans';
    src: local('WorkSans Regular'), local('WorkSans-Regular'),
        url('./assets/fonts/WorkSans/WorkSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Work Sans';
    src: local('WorkSans Light'), local('WorkSans-Light'),
        url('./assets/fonts/WorkSans/WorkSans-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  ${resets}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    --title-font: "Gilroy", Arial, Helvetica, sans-serif;
    --text-font: "Work Sans", sans-serif;

    color: var(--gray-900);
    background-color: var(--gray-100);
    font-family: var(--text-font);
    margin: 0;
    padding: 0;
  }

  a {
    all: unset;
    cursor: pointer;
  }
`;
