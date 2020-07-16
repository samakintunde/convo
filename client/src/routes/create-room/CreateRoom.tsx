import React, { useEffect, useState } from "react";
import { Input } from "components/common/Input";
import { GridContainer } from "components/common/GridContainer/GridContainer";
import Box from "components/common/Box";
import Stack from "components/common/Stack";
import ResponsiveText from "components/common/ResponsiveText";
import ResponsiveTitle from "components/common/ResponsiveTitle";
import Button from "components/common/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CREATE_ROOM, USER_JOINED } from "constants/events";
import { format } from "date-fns";
import { getCurrentTime } from "utils/date";
import { useSocket } from "contexts/socketio";
import Text from "components/common/Text";
import { useHistory, useLocation } from "react-router-dom";

export type IUser = {
  id?: string;
  name: string;
};

export type IChatRoom = {
  id?: string;
  name: string;
  admin: IUser;
  users: { [key: string]: IUser };
  createdAt: string;
};

type CreateRoomResponse = {
  success: boolean;
  room: IChatRoom;
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  roomName: Yup.string().required("Room name is required"),
});

export const CreateRoom = () => {
  const [roomCreated, setRoomCreated] = useState(false);
  const [room, setRoom] = useState<IChatRoom | undefined>(undefined);
  let socket = useSocket();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      roomName: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleCreateRoom(values.username, values.roomName);
      formik.resetForm();
    },
  });

  const handleCreateRoom = (username: string, roomName: string) => {
    const payload = {
      roomName,
      username,
    };

    socket.emit(CREATE_ROOM, payload);
  };

  useEffect(() => {
    if (room) {
      history.push("/chat", { room, currentUser: room.admin });
    }
  }, [room, history]);

  useEffect(() => {
    if (socket.disconnected) {
      socket.connect();
      socket.on(CREATE_ROOM, (payload: CreateRoomResponse) => {
        setRoomCreated(payload.success);
        setRoom(payload.room);
      });
    }
    return () => {
      socket.disconnect();
    };
  });

  return (
    <GridContainer>
      <Box paddingTop="lg" width={["100%", "75%", "50%"]}>
        <Box marginBottom="lg">
          <ResponsiveTitle min={24} max={32}>
            Create a room
          </ResponsiveTitle>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="vertical">
            <div>
              <label>
                <ResponsiveText min={12} max={14}>
                  Your name
                </ResponsiveText>
                <Input
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
                {formik.errors.username && formik.touched.username && (
                  <Text color="danger" size="small">
                    {formik.errors.username}
                  </Text>
                )}
              </label>
            </div>
            <div>
              <label>
                <ResponsiveText min={12} max={14}>
                  Room name
                </ResponsiveText>
                <Input
                  name="roomName"
                  value={formik.values.roomName}
                  onChange={formik.handleChange}
                />
                {formik.errors.roomName && formik.touched.roomName && (
                  <Text color="danger" size="small">
                    {formik.errors.roomName}
                  </Text>
                )}
              </label>
            </div>
            <Button kind="primary" type="submit">
              Create Room
            </Button>
          </Stack>
        </form>
      </Box>
    </GridContainer>
  );
};
