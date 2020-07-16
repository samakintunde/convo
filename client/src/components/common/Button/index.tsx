import React from "react";
import styled, { css } from "styled-components";
import { remCalc } from "../../../theme/utils";

type ButtonProps = {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => any;
  kind?: "primary" | "secondary";
  type?: "button" | "reset" | "submit";
};

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: ${remCalc(2)};
  font-weight: 500;
  letter-spacing: ${remCalc(0.8)};
  font-size: ${remCalc(16)};
  font-family: "Gilroy", Arial, Helvetica, sans-serif;
  padding: ${(props) => props.theme.spacing.xs + " " + props.theme.spacing.xl};
  transition: 0.3s ease-in-out;

  ${(props) =>
    props.kind === "primary"
      ? css`
          color: ${props.theme.colors.brand100};
          background-color: ${props.theme.colors.brand500};
        `
      : css`
          color: ${props.theme.colors.brand500};
          background-color: ${props.theme.colors.white};
          border: 1px solid ${props.theme.colors.brand500};
        `};

  &:hover {
    cursor: pointer;
    ${(props) =>
      props.kind === "primary"
        ? css`
            background-color: ${props.theme.colors.brand400};
          `
        : css`
            background-color: ${props.theme.colors.brand100};
          `}
  }
`;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick } = props;

  return (
    <StyledButton {...props} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  kind: "primary",
};

export default Button;
