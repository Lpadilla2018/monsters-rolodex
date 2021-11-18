import React from 'react';
import { Card } from '../card/card.component';

// Styles
import './card-list.styles.css';

export const CardList = (props) => {
  return (
    <div className='card-list'>
      {
        props.monsters.map((monster, index) => {
          {/* return <h1 key={index}>{monster.name}</h1> */}
          return <Card key={index} monster={monster}/>
        })
      }

    </div>
  )
  // return <div className='card-list'> {props.children}</div>;
};
