import React from "react";
import { StyledBox } from "./Box.styles";

type BoxProps = {
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

const Box: React.FC<BoxProps> = (props) => {
  const { children } = props;

  // @ts-ignore
  return <StyledBox {...props}>{children}</StyledBox>;
};

Box.defaultProps = {
  as: "div",
  background: "transparent",
};

export default Box;
