import { combineReducers } from "redux";

import authReducer from "./authReducer";
import postReducer from "./postReducer";

export const reducers = combineReducers({
  auth: authReducer,
  post: postReducer,
});
