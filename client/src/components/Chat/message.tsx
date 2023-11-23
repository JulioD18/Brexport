/** Styling of messages gotten from https://codesandbox.io/s/material-ui-chat-drh4l?file=/src/App.js */

import styles from "../../styles/message.module.css";

export function GuestMessage({
  message = "Hi! Welcome to BrexChat. Debate away!",
  name = "Brex",
}) {
  return (
    <>
      <div className={styles.messageRow}>
        <div>
          <div className={styles.displayName}>{name}</div>
          <div className={styles.messageBlue}>
            <div>
              <p className={styles.messageContent}>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function HostMessage({ message = "HOST TEXT", name = "Agent" }) {
  return (
    <div className={styles.messageRowRight}>
      <div className={styles.messageOrange}>
        <p className={styles.messageContent}>{message}</p>
      </div>
    </div>
  );
}
