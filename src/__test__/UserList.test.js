import React from "react";
import { render } from "@testing-library/react";
import UserList from "../components/UserList/index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const initialState = {};
const store = mockStore(initialState);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const mockUsers = [
  { id: 1, name: "User 1", email: "user1@example.com", phone: "123456789" },
  { id: 2, name: "User 2", email: "user2@example.com", phone: "231565164" },
  { id: 3, name: "User 3", email: "user3@example.com", phone: "486385541" },
];

test("renders user list with mock users", () => {
  const { getByText } = render(
    <Provider store={store}>
      <UserList users={mockUsers} />
    </Provider>
  );

  // Check if user names are rendered
  for (const user of mockUsers) {
    const userNameElement = getByText(user.name);
    expect(userNameElement).toBeInTheDocument();
  }
});
