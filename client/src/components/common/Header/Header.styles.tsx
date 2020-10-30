import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.brand500};
  color: ${(props) => props.theme.colors.white};
  padding-top: ${(props) => props.theme.spacing.sm};
  padding-bottom: ${(props) => props.theme.spacing.sm};
`;
