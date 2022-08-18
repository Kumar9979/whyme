import { combineReducers } from "redux";
import jsonApiReducer from "./jsonApiRedcuer";

const rootReducer = combineReducers({ jsonApiReducer });

export default rootReducer;
