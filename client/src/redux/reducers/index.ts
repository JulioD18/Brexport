import { combineReducers } from "redux";

import leagueReducer from "./league-reducer";

export default combineReducers({
  leagues: leagueReducer,
});
