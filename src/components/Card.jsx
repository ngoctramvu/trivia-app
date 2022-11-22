import React from "react";

function Card(props) {
  function handleClick() {
    props.onSelect(props.code);
  }

  return (
    <div className="card" onClick={handleClick} style={props.style}>
      <h1>{props.value}</h1>
    </div>
  );
}

export default Card;
