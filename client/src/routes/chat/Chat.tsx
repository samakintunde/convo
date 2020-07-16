import React, { useEffect, useState } from "react";
import { GridContainer } from "components/common/GridContainer/GridContainer";
import Box from "components/common/Box";
import ResponsiveTitle from "components/common/ResponsiveTitle";
import { ChatHeader } from "components/chat/ChatHeader";
import { ChatArea } from "components/chat/ChatArea";
import styled from "styled-components";
import { ChatActions } from "components/chat/ChatActions";
import { Message, MessageProps } from "components/chat/Message";
import Flex from "components/common/Flex/flex";
import Stack from "components/common/Stack";
import { MessageType } from "constants/messages";
import { useHistory } from "react-router-dom";
import { IChatRoom, IUser } from "routes/create-room/CreateRoom";
import { useSocket } from "contexts/socketio";
import { SEND_MESSAGE } from "constants/events";
import { format, parseISO } from "date-fns";

const StyledChat = styled.section`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;

  > :nth-child(2) {
    flex: 1 1 auto;
    height: 100%;
    overflow-y: scroll;
  }
`;

type Message = {
  type: MessageType["INCOMING"] | MessageType["OUTGOING"];
  sender: string;
  text: string;
  time: string;
};

export const Chat = () => {
  const history = useHistory();
  const [room, setRoom] = useState<IChatRoom | undefined>(undefined);
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);
  const [messages, setMessages] = useState<Message[]>([]);
  const socket = useSocket();

  const renderMessage = (message?: MessageProps) => {
    if (message && Object.keys(message).length > 3) {
      return (
        <Flex
          key={message.time}
          justify={
            message.type === MessageType.OUTGOING ? "flex-end" : "flex-start"
          }
        >
          <Message
            type={message.type}
            sender={message.sender}
            text={message.text}
            time={message.time}
          />
        </Flex>
      );
    }

    return null;
  };

  useEffect(() => {
    const { state: locationState } = history.location;

    if (!locationState) return history.replace("/");

    // @ts-ignore
    setRoom(locationState.room);
    // @ts-ignore
    setCurrentUser(locationState.currentUser);

    socket.on(SEND_MESSAGE, (payload: any) => {
      console.log(payload);
      setMessages((messages) => [
        ...messages,
        {
          type:
            payload.sender === currentUser?.name
              ? MessageType.INCOMING
              : MessageType.OUTGOING,
          sender: payload.sender,
          text: payload.text,
          time: format(parseISO(payload.time), "HH:mm"),
        },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  // }, [room, socket, currentUser, history]);

  if (!room) return null;

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    const text = e.target.elements["text"].value;

    const message = {
      sender: currentUser,
      text,
    };

    socket.emit(SEND_MESSAGE, message);
  };

  return (
    <StyledChat>
      <ChatHeader title={room?.name || ""} members={room.users || []} />
      <ChatArea>
        <GridContainer height="100%">
          <Box height="100%" paddingTop="xs" paddingBottom="xs">
            <Stack direction="vertical" gap="sm">
              {messages.map((message) => renderMessage(message))}
            </Stack>
          </Box>
        </GridContainer>
      </ChatArea>
      <ChatActions sendMessage={sendMessage} />
    </StyledChat>
  );
};
