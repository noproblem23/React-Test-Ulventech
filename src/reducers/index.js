import list from "./list";
import { isLoading, apiError } from "./interactions";
import { combineReducers } from "redux";

const reducer = combineReducers({
  list,
  isLoading,
  apiError,
});

export default reducer;
