// @ts-nocheck
import styled from "styled-components";
import { generateResponsiveStyles } from "../../../theme/utils";

type StyledBoxProps = {
  as?: string;
  width?: string | string[];
  height?: string | string[];
  padding?: string | string[];
  paddingTop?: string | string[];
  paddingRight?: string | string[];
  paddingBottom?: string | string[];
  paddingLeft?: string | string[];
  margin?: string | string[];
  marginTop?: string | string[];
  marginRight?: string | string[];
  marginBottom?: string | string[];
  marginLeft?: string | string[];
  background?: string;
  textAlign?: string | string[];
  zIndex?: number;
};

export const StyledBox = styled.div<StyledBoxProps>`
  ${(props) => generateResponsiveStyles("width", props.width)};
  ${(props) => generateResponsiveStyles("height", props.height)};
  ${(props) => generateResponsiveStyles("padding", props.padding)};
  ${(props) => generateResponsiveStyles("padding-top", props.paddingTop)};
  ${(props) => generateResponsiveStyles("padding-right", props.paddingRight)};
  ${(props) => generateResponsiveStyles("padding-bottom", props.paddingBottom)};
  ${(props) => generateResponsiveStyles("padding-left", props.paddingLeft)};
  ${(props) => generateResponsiveStyles("margin", props.margin)};
  ${(props) => generateResponsiveStyles("margin-top", props.marginTop)};
  ${(props) => generateResponsiveStyles("margin-right", props.marginRight)};
  ${(props) => generateResponsiveStyles("margin-bottom", props.marginBottom)};
  ${(props) => generateResponsiveStyles("margin-left", props.marginLeft)};
  background-color: ${(props) =>
    props.background && props.theme.colors[props.background]};
  ${(props) => generateResponsiveStyles("text-align", props.textAlign)};
  z-index: ${(props) => props.zIndex};
`;
