import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchUsers } from "../actions";

const mockStore = configureMockStore([thunk]);

describe("fetchUsers action", () => {
  it("should fetch users and dispatch actions", async () => {
    const store = mockStore();

    await store.dispatch(fetchUsers());

    const actions = store.getActions();
    expect(actions).toContainEqual({ type: "IS_LOADING", isLoading: true });
  });
});
