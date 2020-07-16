import React from "react";
import styled from "styled-components";
import { remCalc } from "../../../theme/utils";
import Text, { TextProps } from "../Text";

interface ResponsiveTextProps extends TextProps {
  min: number;
  max: number;
}

const StyledResponsiveText = styled(Text)<ResponsiveTextProps>`
  font-size: ${(props) =>
    `calc(${remCalc(props.min)} + (${props.max} - ${
      props.min
    }) * ((100vw - ${remCalc(300)}) / (1024 - 300)))`};
`;

const ResponsiveText: React.FC<ResponsiveTextProps> = (props) => {
  const { children } = props;

  // @ts-ignore
  return <StyledResponsiveText {...props}>{children}</StyledResponsiveText>;
};

ResponsiveText.defaultProps = {
  min: 16,
  max: 48,
};

export default ResponsiveText;
