import React from "react";
import { SocketIOProvider } from "./socketio";

export const ContextProvider: React.FC = (props) => {
  const { children } = props;

  return <SocketIOProvider>{children}</SocketIOProvider>;
};
