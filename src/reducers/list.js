import { GET_USERS, DELETE_USER } from "../actions";

export default function list(state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.json;
    case DELETE_USER:
      const updatedUsers = state.filter((user) => user.id !== action.userId);
      return updatedUsers;
    default:
      return state;
  }
}
