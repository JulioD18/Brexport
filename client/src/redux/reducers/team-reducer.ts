import { GET_TEAMS } from "../actions/actions";

const initialState = {
  teams: [],
  stat: {},
};

export default function teamReducer(
  state = initialState,
  action: { type: string; payload: Array<{}> }
) {
  const { type, payload } = action;
  switch (type) {
    case GET_TEAMS:
      return {
        ...state,
        teams: payload,
      };
    default:
      return state;
  }
}
