import React from "react";

const Ticket = ({ name, email, avatar }) => {
  return (
    <div className="ticket">
      <h2> Conference Ticket </h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      {avatar && (
        <img src={avatar} alt="User Avatar" className="avatar" />
      )}
    </div>
  );
};

export default Ticket;
