import { CHAT } from "../actions/actions";

const initialState = {
  chat: [],
};

export default function chatReducer(
  state = initialState,
  action: { type: string; payload: Array<{}> }
) {
  const { type, payload } = action;
  switch (type) {
    case CHAT:
      return {
        ...state,
        chat: [...state.chat, payload],
      };
    default:
      return state;
  }
}
