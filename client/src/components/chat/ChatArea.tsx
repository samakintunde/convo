import React from "react";
import styled from "styled-components";

const StyledChatArea = styled.div`
  /* padding: ${(props) => `${props.theme.spacing.xxxs} 0`}; */
`;

export const ChatArea: React.FC = (props) => {
  const { children } = props;

  return <StyledChatArea>{children}</StyledChatArea>;
};
