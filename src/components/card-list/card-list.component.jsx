import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.compoment';

//props perform like parameters
export const CardList = (props) => {
  // the className should be same as the corresponding style in the CSS file
  return (
    <div className="card-list">
      {/* every monster in the list will be mapped to do the following staff */}
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
