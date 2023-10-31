import { GET_LEAGUES } from "./actions";

import store from "../store";

const dispatch = store.dispatch;
const url = process.env.REACT_API;

export const getLeagues = (limit: number, offset: number) => {
  return async () => {
    try {
      const response = await fetch(
        `${url}/leagues?limit=${limit}&offset=${offset}`
      );
      const leagues = await response.json();

      console.log(leagues);

      dispatch({
        type: GET_LEAGUES,
        payload: leagues,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
