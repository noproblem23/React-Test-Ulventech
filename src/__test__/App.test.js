import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchUsers } from "../actions";
import App from "../App";

jest.mock("../actions");

const mockStore = configureStore([thunk]);
const initialState = {
  list: [],
  isLoading: false,
  apiError: {},
};
const store = mockStore(initialState);

describe("App Component", () => {
  test("dispatches fetchUsers action on mount", () => {
    fetchUsers.mockReturnValue(() => ({ type: "GET_USERS", json: [] }));

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(fetchUsers).toHaveBeenCalled();
  });
});
