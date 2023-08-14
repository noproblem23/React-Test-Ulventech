import { trackPromise } from "react-promise-tracker";

export const IS_LOADING = "IS_LOADING";
export const GET_USERS = "GET_USERS";
export const API_ERROR = "API_ERROR";
export const DELETE_USER = "DELETE_USER";
export const SEARCH = "SEARCH";

/**
 * action that get userlists
 * @param {JSON Array} json
 * @returns type and payload to reducer
 */
function getUserResponse(json) {
  return {
    type: GET_USERS,
    json: json,
  };
}

//handling errors when the fetching failed
function apiError(message) {
  return {
    type: API_ERROR,
    message: message,
  };
}

//Loading action. when it is fetching, isLoading variable is true.
export function isLoading(isLoading = false) {
  return {
    type: IS_LOADING,
    isLoading: isLoading,
  };
}

//user delete action with userId
export function deleteUser(userId) {
  return {
    type: DELETE_USER,
    userId: userId,
  };
}

//filter by search bar text
export function setSearchText(text) {
  return {
    type: SEARCH,
    searchText: text,
  };
}

//fetch user datas from the api.  middleware: Redux-Thunk
export function fetchUsers() {
  return (dispatch) => {
    dispatch(isLoading(true));
    trackPromise(
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          return response;
        })
        .then((response) => response.json())
        .then((json) => {
          dispatch(isLoading(false));
          dispatch(getUserResponse(json));
        })
        .catch((error) => {
          dispatch(isLoading(false));
          dispatch(apiError(error.message));
        })
    );
  };
}
