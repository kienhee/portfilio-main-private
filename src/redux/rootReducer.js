/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import projectReducer from "./projectSlice";
const rootReducer = combineReducers({
  authentication: authReducer,
  project: projectReducer,
});
export default rootReducer;
