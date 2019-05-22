import React from 'react';

import classes from './Die.module.css';

const Die = props => {
  return (
    <i
      className={`${classes.Die} ${
        props.rolling ? classes.Shaking : ''
      } fas fa-dice-${props.face}`}
    />
  );
};

export default Die;
