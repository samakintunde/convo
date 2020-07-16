import React from "react";
import styled from "styled-components";
import ResponsiveTitle from "components/common/ResponsiveTitle";
import ResponsiveText from "components/common/ResponsiveText";
import { GridContainer } from "components/common/GridContainer/GridContainer";
import { IUser } from "routes/create-room/CreateRoom";

type ChatHeaderProps = {
  title: string;
  members: { [key: string]: IUser };
};

const StyledChatHeader = styled.div`
  background-color: ${(props) => props.theme.colors.brand100};
  padding: ${(props) => `${props.theme.spacing.xxs} 0`};
`;

export const ChatHeader: React.FC<ChatHeaderProps> = (props) => {
  const { title, members } = props;

  const membersLength = () => Object.keys(members).length;

  return (
    <StyledChatHeader>
      <GridContainer>
        <ResponsiveTitle min={16} max={18}>
          {title}
        </ResponsiveTitle>
        <ResponsiveText min={12} max={14} color="gray700">
          {membersLength() > 1
            ? `${membersLength()} members`
            : `${membersLength()} member`}
        </ResponsiveText>
      </GridContainer>
    </StyledChatHeader>
  );
};
