import { combineReducers } from "redux";
import authReducer from "./authReducer";
import windowSizeReducer from "./windowSizeReducer";

export default combineReducers({ auth: authReducer, windowSize: windowSizeReducer });
