import list from "./list";
import { isLoading, apiError, search } from "./interactions";
import { combineReducers } from "redux";

const reducer = combineReducers({
  list,
  isLoading,
  apiError,
  search,
});

export default reducer;
