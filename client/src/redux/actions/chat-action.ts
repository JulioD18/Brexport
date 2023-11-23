import { CHAT } from "./actions";
import store from "../store";

const dispatch = store.dispatch;
const url = "http://localhost:3001/api";

export const chat = (message: string) => {
  return async () => {
    try {
      const response = await fetch(`${url}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const chat = await response.json();
      console.log(chat);

      dispatch({
        type: CHAT,
        payload: chat,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
