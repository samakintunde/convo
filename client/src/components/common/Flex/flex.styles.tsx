import styled from "styled-components";

type StyledFlexProps = {
  wrap?: string;
  align?: string;
  direction: string;
  height: string;
  justify?: string;
  children: React.ReactNode;
};

export const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  flex-wrap: ${(props) => props.wrap && "wrap"};
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  height: ${(props) => props.height};
  width: 100%;
`;
