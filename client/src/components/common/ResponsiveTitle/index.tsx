import React from "react";
import styled from "styled-components";
import { remCalc } from "../../../theme/utils";
import Title from "../Title";

type ResponsiveTitleProps = {
  children: React.ReactNode;
  min: number;
  max: number;
  color?: string;
};

const StyledResponsiveTitle = styled(Title)<ResponsiveTitleProps>`
  font-size: ${(props) =>
    `calc(${remCalc(props.min)} + (${props.max} - ${
      props.min
    }) * ((100vw - ${remCalc(300)}) / (1024 - 300)))`};
`;

const ResponsiveTitle: React.FC<ResponsiveTitleProps> = (props) => {
  const { children } = props;
  // @ts-ignore
  return <StyledResponsiveTitle {...props}>{children}</StyledResponsiveTitle>;
};

ResponsiveTitle.defaultProps = {
  min: 24,
  max: 64,
};

export default ResponsiveTitle;
