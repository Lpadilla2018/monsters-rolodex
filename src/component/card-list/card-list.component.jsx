import React from 'react';
import { Card } from '../card/card.component';

// Styles
import './card-list.styles.css';

export const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      {
        /* return <h1 key={index}>{monster.name}</h1> */
      }
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
  // return <div className='card-list'> {props.children}</div>;
);
