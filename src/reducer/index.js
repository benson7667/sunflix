import { combineReducers } from "redux";
import authReducer from "./authReducer";
import popularReducer from "./popularReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  popularMovies: popularReducer
});

export default rootReducer;
