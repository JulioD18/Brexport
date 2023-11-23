import { GET_LEAGUES } from "./actions";

import store from "../store";

// // import env
// import dotenv from "dotenv";
// dotenv.config();

const dispatch = store.dispatch;
const url = "http://localhost:3001/api";

export const getLeagues = (limit: number, offset: number) => {
  return async () => {
    try {
      const response = await fetch(
        `${url}/leagues?limit=${limit}&offset=${offset}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const leagues = await response.json();

      dispatch({
        type: GET_LEAGUES,
        payload: leagues,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
