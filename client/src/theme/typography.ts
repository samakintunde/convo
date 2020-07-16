export interface ITypography {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  large: string;
  regular: string;
  small: string;
}

const TYPOGRAPHY: ITypography = {
  h1: "var(--h1-size)",
  h2: "var(--h2-size)",
  h3: "var(--h3-size)",
  h4: "var(--h4-size)",
  h5: "var(--h5-size)",
  h6: "var(--h6-size)",
  large: "var(--body-large-size)",
  regular: "var(--body-regular-size)",
  small: "var(--body-small-size)",
};

export default TYPOGRAPHY;
