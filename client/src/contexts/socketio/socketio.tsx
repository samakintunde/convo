import React, { createContext, useContext } from "react";
import { connect as io } from "socket.io-client";

const SocketIOContext = createContext<SocketIOClient.Socket>(
  io("http://localhost:5000/")
);

export const useSocket = () => useContext(SocketIOContext);

export const SocketIOProvider: React.FC = (props) => {
  const { children } = props;

  const socket = io("http://localhost:5000/");

  return (
    <SocketIOContext.Provider value={socket}>
      {children}
    </SocketIOContext.Provider>
  );
};
