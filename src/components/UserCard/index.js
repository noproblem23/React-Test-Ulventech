import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../actions";
import "./UserCard.css";

const UserCard = (props) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(props.info.id));
  };

  return (
    <div className="user-card">
      <div className="user-card-header">
        <h3 className="user-card-name">{props.info.name}</h3>
      </div>
      <div className="user-card-body">
        <p className="user-card-email">Email: {props.info.email}</p>
        <p className="user-card-phone">Phone: {props.info.phone}</p>
        <div className="user-card-address">
          <p>Address</p>
          <p>Street: {props.info.address.street}</p>
          <p>Suite: {props.info.address.suite}</p>
          <p>City: {props.info.address.city}</p>
          <p>Zipcode: {props.info.address.zipcode}</p>
        </div>
      </div>
      <div className="user-card-delete">
        <button onClick={handleDelete}>Remove</button>
      </div>
    </div>
  );
};

export default UserCard;
