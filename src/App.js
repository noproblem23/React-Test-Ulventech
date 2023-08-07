import "./App.css";
import { connect } from "react-redux";
import UserList from "./components/UserList";
import { fetchUsers } from "./actions";
import { useEffect } from "react";

function App(props) {
  useEffect(() => {
    props.getUsers();
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">User Lists </h1>
      {Object.keys(props.apiError).length ? (
        <h3>We cannnot reach out the server!</h3>
      ) : (
        <UserList users={props.users} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.list,
    isLoading: state.isLoading,
    apiError: state.apiError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(fetchUsers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
