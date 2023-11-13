import { GET_TEAMS } from "./actions";

import store from "../store";

const dispatch = store.dispatch;
const url = "http://localhost:3001/api";

export const getTeams = (league: string, limit: number, offset: number) => {
  return async () => {
    try {
      const response = await fetch(
        `${url}/teams?team=${league}&limit=${limit}&offset=${offset}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const teams = await response.json();

      dispatch({
        type: GET_TEAMS,
        payload: teams,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
