import styled from "styled-components";
import { generateResponsiveStyles } from "theme/utils";

type StyledFlexItemProps = {
  basis?: string | number;
  flex?: number | string;
  grow?: string | number;
  span?: string | number;
  shrink?: string | number;
  height?: string | number;
  order?: string | number;
};

export const StyledFlexItem = styled.div<StyledFlexItemProps>`
  flex: ${(props) => props.flex};
  flex-grow: ${(props) => props.grow};
  flex-shrink: ${(props) => props.shrink};
  flex-basis: ${(props) => props.basis};
  height: ${(props) => props.height};
  order: ${(props) => props.order};
  ${(props) => generateResponsiveStyles("span", props.span)};
`;
