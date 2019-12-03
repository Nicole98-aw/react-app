import React from "react";

function ContentCard(props) {
  return (
    <div>
      <img src={props.contact.imgUrl} alt="" />
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>email: {props.contact.email}</p>
    </div>
  );
}

export default ContentCard;
