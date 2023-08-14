import { IS_LOADING, API_ERROR, SEARCH } from "../actions";

export function isLoading(state = {}, action) {
  switch (action.type) {
    case IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function apiError(state = {}, action) {
  switch (action.type) {
    case API_ERROR:
      return action.message;
    default:
      return state;
  }
}

export function search(state = "", action) {
  switch (action.type) {
    case SEARCH:
      return action.searchText;
    default:
      return state;
  }
}
