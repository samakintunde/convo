import styled, { css } from "styled-components";
import { remCalc } from "theme/utils";

type StyledButtonCardProps = {
  disabled: boolean;
};

export const StyledButtonCard = styled.button<StyledButtonCardProps>`
  text-align: center;
  border: ${(props) => `${remCalc(1)} solid ${props.theme.colors.brand500}`};
  padding: ${(props) => `${props.theme.spacing.lg} ${props.theme.spacing.md}`};
  background-color: ${(props) => props.theme.colors.brand100};
  transition: 0.3s ease-in-out;
  cursor: pointer;
  width: 100%;

  ${(props) => props.disabled && css``}

  &:hover {
    background-color: ${(props) => props.theme.colors.brand200};
  }

  &:disabled {
    border-color: ${(props) => props.theme.colors.gray300};
    background-color: ${(props) => props.theme.colors.gray100};
  }

  svg {
    fill: ${(props) =>
      props.disabled
        ? props.theme.colors.gray500
        : props.theme.colors.brand500};
  }

  & :last-child {
    margin-top: ${(props) => props.theme.spacing.sm};
    color: ${(props) => props.theme.colors.gray900};
  }
`;
