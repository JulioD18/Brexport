import { GET_LEAGUES } from "../actions/actions";

const initialState = {
  leagues: [],
};

export default function leagueReducer(
  state = initialState,
  action: { type: string; payload: Array<{}> }
) {
  const { type, payload } = action;
  switch (type) {
    case GET_LEAGUES:
      return {
        ...state,
        leagues: payload,
      };
    default:
      return state;
  }
}
