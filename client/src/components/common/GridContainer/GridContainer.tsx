import styled from "styled-components";

type GridContainerProps = {
  minHeight?: string;
  height?: string;
};

export const GridContainer = styled.div<GridContainerProps>`
  max-width: ${(props) => props.theme.maxWidth};
  padding-left: ${(props) => props.theme.gutter};
  padding-right: ${(props) => props.theme.gutter};
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height: ${(props) => props.minHeight};
  height: ${(props) => props.height};
`;
