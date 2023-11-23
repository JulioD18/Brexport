import { Box, TextField, InputAdornment } from "@mui/material";
import SendSharpIcon from "@mui/icons-material/SendSharp";

import styles from "../../styles/chat-form.module.css";

export default function ChatForm() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      width="80vw"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          placeholder="What did the soccer ball say during its chat with the net? 'I'm here to have a ball of a time!'"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SendSharpIcon className={styles["send"]} />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </Box>
  );
}
