import React from "react";
import styled from "styled-components";
import { remCalc } from "theme/utils";
import { GridContainer } from "components/common/GridContainer/GridContainer";
import { FiSend, FiPlus } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";

type StyledRoundButtonProps = {
  background?:
    | "brand100"
    | "brand200"
    | "brand300"
    | "brand400"
    | "brand500"
    | "brand600"
    | "brand700"
    | "brand800"
    | "brand900"
    | "gray100"
    | "gray200"
    | "gray300"
    | "gray400"
    | "gray500"
    | "gray600"
    | "gray700"
    | "gray800"
    | "gray900"
    | "black"
    | "white";
};

type ChatActionsProps = {
  sendMessage: (event: React.FormEvent<HTMLFormElement>) => void;
};

const StyledChatActions = styled.form`
  padding: ${(props) => `${props.theme.spacing.sm} 0`};
  & > div {
    display: flex;

    > * + * {
      margin-left: ${(props) => props.theme.spacing.sm};
    }
  }
`;

const StyledRoundButton = styled.button<StyledRoundButtonProps>`
  height: ${remCalc(40)};
  width: ${remCalc(40)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${remCalc(24)};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.background
      ? props.theme.colors[props.background]
      : props.theme.colors.brand500};
  border: 0;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.brand600};
  }
`;

const StyledInput = styled.input`
  padding: ${(props) => `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
  border: ${(props) => `${remCalc(1)} solid ${props.theme.colors.gray200}`};
  flex: 1 1 auto;
  transition: 0.3s ease-in-out;

  &:hover {
    border-color: ${(props) => props.theme.colors.brand300};
  }
`;

export const ChatActions: React.FC<ChatActionsProps> = (props) => {
  const { sendMessage } = props;

  return (
    <StyledChatActions onSubmit={sendMessage}>
      <GridContainer>
        <StyledRoundButton>
          <FiPlus />
        </StyledRoundButton>
        <StyledInput type="text" name="text" />
        <StyledRoundButton type="submit">
          <AiOutlineSend />
        </StyledRoundButton>
      </GridContainer>
    </StyledChatActions>
  );
};
