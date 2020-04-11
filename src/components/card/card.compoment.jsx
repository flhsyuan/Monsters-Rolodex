import React from 'react';

import './card.styles.css';

// the props is the paramter that Card received
export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      //   the parameter that pass into the src useing the & to connect with each other
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
