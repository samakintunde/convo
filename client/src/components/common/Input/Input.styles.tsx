import styled from "styled-components";
import { remCalc } from "theme/utils";

export const StyledInputWrapper = styled.div`
  input {
    padding: ${(props) =>
      `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
    width: 100%;
    border: ${(props) => `${remCalc(1)} solid ${props.theme.colors.gray300}`};
    transition: 0.3s ease-in-out;

    &:hover {
      border-color: ${(props) => props.theme.colors.brand300};
    }
  }
`;
