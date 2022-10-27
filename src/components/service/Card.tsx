import * as React from 'react';
const Card = (props: any) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <div className="cardName">{props.name}</div>
    </div>
  );
};

export default Card;
