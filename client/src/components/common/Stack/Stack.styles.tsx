import styled, { css } from "styled-components";
import { ISpacing } from "../../../theme/spacing";

type StyledStackProps = {
  direction: "horizontal" | "vertical";
  gap: ISpacing;
};

export const StyledStack = styled.div<StyledStackProps>`
  > * + * {
    ${(props) =>
      props.direction === "vertical"
        ? css`
            margin-top: ${(props) =>
              // @ts-ignore
              props.theme.spacing[props.gap] || props.gap};
          `
        : css`
            margin-left: ${(props) =>
              // @ts-ignore
              props.theme.spacing[props.gap] || props.gap};
          `}
  }
`;
