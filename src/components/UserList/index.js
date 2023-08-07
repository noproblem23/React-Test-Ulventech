import React from "react";
import UserCard from "../UserCard";
import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="user-lists">
      {props.users.map((user, index) => (
        <UserCard info={user} key={index} />
      ))}
    </div>
  );
};

export default UserList;
