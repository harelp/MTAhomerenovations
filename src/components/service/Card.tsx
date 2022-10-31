import * as React from 'react';

const Card = (props: any) => {
  const { name, bg, icon } = props;
  return (
    <div className="serviceCard">
      <img className="cardBg" src={bg} alt={`${name} background image`} />
      <img className="cardIcon" src={icon} alt={`${name} icon`} />
      <h5>{name}</h5>
    </div>
  );
};

export default Card;
