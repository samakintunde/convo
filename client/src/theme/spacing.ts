export interface ISpacing {
  none: string;
  xxxs: string;
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
}

const SPACING: ISpacing = {
  // Uses Golden ratio
  none: "none",
  xxxs: "var(--spacing-xxxs)",
  xxs: "var(--spacing-xxs)",
  xs: "var(--spacing-xs)",
  sm: "var(--spacing-sm)",
  md: "var(--spacing-md)",
  lg: "var(--spacing-lg)",
  xl: "var(--spacing-xl)",
  xxl: "var(--spacing-xxl)",
  xxxl: "var(--spacing-xxxl)",
};

export default SPACING;
