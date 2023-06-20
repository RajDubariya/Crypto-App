import { combineReducers } from "redux";
import coinReducer from "./reducers";

const rootReducer = combineReducers({
  coin: coinReducer,
});

export default rootReducer;
