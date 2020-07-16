// @ts-nocheck
import React from "react";
import styled from "styled-components";

type TitleProps = {
  level: number | string;
  color: string;
};

export const StyledTitle = styled.h1<TitleProps>`
  font-family: var(--title-font);
  font-weight: 700;
  color: ${(props) => props.theme.colors[props.color] || props.color};
  font-size: ${(props) => `var(${props.size})`};
  line-height: 1.125;
`;

const isValidHeader = (level: string | number) => {
  level = Number(level);
  return level >= 0 && level <= 6;
};

const generateHeaderStyle = (level: string | number) => {
  return isValidHeader(level) ? `--h${level}-size` : `--body-regular-size`;
};

const generateHeaderElement = (level: string | number) => {
  return isValidHeader(level) ? `h${level}` : "h6";
};

const Title: React.FC<TitleProps> = (props) => {
  const { level, children } = props;

  const size = generateHeaderStyle(level);
  return (
    // @ts-ignore
    <StyledTitle as={generateHeaderElement(level)} size={size} {...props}>
      {children}
    </StyledTitle>
  );
};

Title.defaultProps = {
  color: "inherit",
  level: 6,
};

export default Title;
