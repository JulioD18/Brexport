import React from "react";
import styles from "../../styles/message.module.css";

/** Styling of messages gotten from https://codesandbox.io/s/material-ui-chat-drh4l?file=/src/App.js */

export const GuestMessage = ({
  message = "GENERIC TEXT",
  timestamp = "TTT:00:00:00",
  name = "Agent",
}) => {
  return (
    <>
      <div className={styles.messageRow}>
        <div>
          <div className={styles.displayName}>{name}</div>
          <div className={styles.messageBlue}>
            <div>
              <p className={styles.messageContent}>{message}</p>
            </div>
            <div className={styles.messageTimeStampRight}>{timestamp}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export const HostMessage = ({
  message = "GENERIC TEXT",
  timestamp = "TTT:00:00:00",
  name = "Agent",
}) => {
  return (
    <div className={styles.messageRowRight}>
      <div className={styles.messageOrange}>
        <p className={styles.messageContent}>{message}</p>
        <div className={styles.messageTimeStampRight}>{timestamp}</div>
      </div>
    </div>
  );
};
