import React from "react";
import UserCard from "../UserCard";
import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="user-lists">
      {props.users.map((user, index) => {
        const allTextOfUser =
          user.name +
          user.email +
          user.phone +
          user.address.street +
          user.address.suite +
          user.address.city +
          user.address.zipcode;
        if (
          allTextOfUser.toLowerCase().includes(props.search.toLowerCase()) ||
          props.search == ""
        )
          return <UserCard info={user} key={index} />;
      })}
    </div>
  );
};

export default UserList;
