import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";

import axios from "axios";

import Button from "./Button";

/*single user details page, fetching apis and displaying details */
const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return user ? (
    <div className="details shadow-lg">
      <div className="user-details">
        <h5 className="card-title">User Details</h5>
        <span className="horizontal-line"></span>
        <p>Name: {user.name}</p>
        <p> Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Company: {user.company.name}</p>
        <p>Website: {user.website}</p>
        <p>Address:</p>
      </div>
      <ul>
        <li>Stree: {user.address.street}</li>
        <br />
        <li>Suite: {user.address.suite}</li>
        <br />
        <li>City: {user.address.city}</li>
        <br />
        <li>Zipcode: {user.address.zipcode}</li>
      </ul>
      <div className="back-btn">
        <Button
          toLink="/"
          buttonText="Back"
        />
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default UserDetail;
