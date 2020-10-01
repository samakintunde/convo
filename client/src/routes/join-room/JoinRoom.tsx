import React, { useEffect } from "react";
import { Input } from "components/common/Input";
import { GridContainer } from "components/common/GridContainer/GridContainer";
import Box from "components/common/Box";
import Stack from "components/common/Stack";
import ResponsiveText from "components/common/ResponsiveText";
import ResponsiveTitle from "components/common/ResponsiveTitle";
import Button from "components/common/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { USER_JOINED } from "constants/events";
import { useSocket } from "contexts/socketio";
import Text from "components/common/Text";
import { useHistory } from "react-router-dom";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  roomId: Yup.string().required("Room name is required"),
});

export const JoinRoom = () => {
  const socket = useSocket();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      roomId: "",
      username: "",
    },
    validationSchema,
    onSubmit: (values) => {
      socket.emit(USER_JOINED, {
        roomId: values.roomId,
        username: values.username,
      });
    },
  });

  useEffect(() => {
    socket.on(USER_JOINED, (payload: any) => {
      console.log(payload)
      if (payload.success) {
        history.push("/chat", {
          room: payload.room,
          currentUser: payload.user,
        });
      }
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <GridContainer>
      <Box paddingTop="lg" width={["100%", "75%", "50%"]}>
        <Box marginBottom="lg">
          <ResponsiveTitle min={24} max={32}>
            Join a room
          </ResponsiveTitle>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="vertical">
            <div>
              <label>
                <ResponsiveText min={12} max={14}>
                  Room code (ask the room admin)
                </ResponsiveText>
                <Input
                  name="roomId"
                  value={formik.values.roomId}
                  onChange={formik.handleChange}
                />
                {formik.errors.roomId && formik.touched.roomId && (
                  <Text color="danger" size="small">
                    {formik.errors.roomId}
                  </Text>
                )}
              </label>
            </div>
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
            <Button kind="primary" type="submit">
              Join Room
            </Button>
          </Stack>
        </form>
      </Box>
    </GridContainer>
  );
};
