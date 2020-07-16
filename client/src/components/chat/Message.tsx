import React from "react";
import styled, { css } from "styled-components";
import { remCalc, mediaQuery } from "theme/utils";
import ResponsiveTitle from "components/common/ResponsiveTitle";
import ResponsiveText from "components/common/ResponsiveText";
import Box from "components/common/Box";
import Text from "components/common/Text";
import { MessageType } from "constants/messages";

export type MessageProps = {
  sender: string;
  text: string;
  time: string;
  type: MessageType["INCOMING"] | MessageType["OUTGOING"];
};

type StyledMessageProps = {
  type?: MessageType["INCOMING"] | MessageType["OUTGOING"];
};

const StyledMessage = styled.article<StyledMessageProps>`
  padding: ${(props) => props.theme.spacing.sm};
  border-radius: ${remCalc(8)};
  width: max-content;
  max-width: ${remCalc(240)};
  ${(props) =>
    props.type === MessageType.INCOMING
      ? css`
          background-color: ${props.theme.colors.gray200};
        `
      : css`
          background-color: ${props.theme.colors.brand100};
        `}

  h6 {
    color: ${(props) => props.theme.colors.brand500};
    letter-spacing: ${remCalc(0.5)};
    font-weight: 600;
  }

  > div p:nth-child(1) {
    line-height: 1;
  }

  > p {
    text-align: right;
  }

  ${mediaQuery.tablet`
    max-width: ${remCalc(360)};
  `}

  ${mediaQuery.desktop`
    max-width: ${remCalc(540)};
  `}
`;

export const Message: React.FC<MessageProps> = (props) => {
  const { sender, text, time, type } = props;

  return (
    <StyledMessage type={type}>
      {type === MessageType.INCOMING && (
        <ResponsiveTitle min={12} max={12}>
          {sender}
        </ResponsiveTitle>
      )}
      <Box marginTop="xxxs" marginBottom="xxxs">
        <Text size="12">{text}</Text>
      </Box>
      <ResponsiveText min={10} max={12} color="gray400">
        {time}
      </ResponsiveText>
    </StyledMessage>
  );
};
