import { useEffect } from "react";
import { Box, Typography, Toolbar } from "@mui/material";

import { GuestMessage, HostMessage } from "./message";
import ChatForm from "./chat-form";

import style from "../../utils/style";
import styles from "../../styles/chat.module.css";

export default function Chat() {
  useEffect(() => {
    style(styles);
  }, []);

  return (
    <Box
      position="absolute" // Change to relative
      display="flex"
      flexDirection="column" // Stack elements vertically
      alignItems="center" // Center horizontally
      justifyContent="center" // Center vertically
      className={styles["custom-body"]}
      height="100vh"
      width="100vw"
    >
      <Box
        className={styles["custom-title"]}
        top="0"
        width="80%"
        display="flex"
        justifyContent="center"
      >
        <Box height="10%">
          <Toolbar>
            <Typography
              variant="h3"
              noWrap
              component="div"
              color="white"
              height="20%"
              marginBottom="0"
            >
              BREXCHAT
            </Typography>
          </Toolbar>
        </Box>
      </Box>
      <Box
        display="inline-table"
        height="90%"
        width="70%"
        justifyContent="space-between" // Center map horizontally
        alignItems="top" // Center map vertically
        mt={2}
      >
        <div className={styles["messages-container"]}>
          <GuestMessage />
          <HostMessage />
          <GuestMessage />
          <HostMessage />
          <GuestMessage />
          <HostMessage />
          <GuestMessage />
          <HostMessage />
          <GuestMessage />
          <HostMessage />
        </div>
      </Box>
      <ChatForm />
    </Box>
  );
}
