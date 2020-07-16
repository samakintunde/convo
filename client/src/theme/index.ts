import spacing, { ISpacing } from "./spacing";
import breakpoint, { IBreakpoint } from "./breakpoint";
import colors, { IColors } from "./color";
import typography, { ITypography } from "./typography";
import container from "./layout";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: ISpacing;
    breakpoint: IBreakpoint;
    colors: IColors;
    typography: ITypography;
    maxWidth: string;
    gutter: string;
  }
}

const theme: DefaultTheme = {
  spacing,
  breakpoint,
  colors,
  typography,
  ...container,
};

export default theme;
