import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchUsers, deleteUser } from "../actions";

const mockStore = configureMockStore([thunk]);

describe("fetchUsers action", () => {
  it("should fetch users and dispatch actions", async () => {
    const store = mockStore();

    await store.dispatch(fetchUsers()); //fetching test
    await store.dispatch(deleteUser(1)); //deletion test

    const actions = store.getActions();

    expect(actions).toContainEqual({ type: "IS_LOADING", isLoading: true });
    expect(actions).toContainEqual({ type: "DELETE_USER", userId: 1 });
  });
});
