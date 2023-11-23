import { combineReducers } from "redux";

import leagueReducer from "./league-reducer";
import teamReducer from "./team-reducer";

export default combineReducers({
  leagues: leagueReducer,
  teams: teamReducer,
});
