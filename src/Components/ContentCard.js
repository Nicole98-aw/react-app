import React from "react";

function ContentCard(props) {
  return (
    <div>
      <img src={props.imgUrl} alt="" />
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>email: {props.email}</p>
    </div>
  );
}

export default ContentCard;
