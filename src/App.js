import { connect } from "react-redux";
import { useEffect } from "react";
import UserList from "./components/UserList";
import { fetchUsers, setSearchText } from "./actions";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App(props) {
  useEffect(() => {
    props.getUsers();
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">User Lists </h1>
      <SearchBar setSearch={props.setSearch} />
      {Object.keys(props.apiError).length ? (
        <h3>We cannnot reach out the server!</h3>
      ) : (
        <UserList users={props.users} search={props.search} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.list,
    isLoading: state.isLoading,
    apiError: state.apiError,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(fetchUsers());
    },
    setSearch: (text) => {
      dispatch(setSearchText(text));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
