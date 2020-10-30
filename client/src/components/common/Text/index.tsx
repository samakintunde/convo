// @ts-nocheck
import React from "react";
import styled from "styled-components";

export interface TextProps {
  color?: string;
  size?: string;
  weight?: number;
  children: React.ReactNode;
}

const StyledText = styled.p<TextProps>`
  color: ${(props) => props.theme.colors[props.color]};
  font-size: ${(props) => props.theme.typography[props.size]};
  font-weight: ${(props) => props.weight};
  line-height: 1.5;
  margin: 0;
`;

const Text: React.FC<TextProps> = (props) => {
  const { children } = props;

  return <StyledText {...props}>{children}</StyledText>;
};

Text.defaultProps = {
  color: "inherit",
  size: "regular",
  weight: 500,
};

export default Text;
