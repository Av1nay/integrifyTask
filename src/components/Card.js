import React from "react";

import Button from "./Button";
/* card component for users*/

const Card = ({name, username, website, id }) => {
  const fullName = name.split("");
  const Initials = fullName.shift().toUpperCase();

  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="initials-circle">
            <h1 className="initials-title">{Initials}</h1>
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{username}</p>
            <p className="card-text email">http://{website}</p>
            <Button toLink={`/users/${id}`} buttonText="MORE DETAILS"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
