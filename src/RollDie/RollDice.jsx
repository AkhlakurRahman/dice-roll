import React, { Component } from 'react';

import classes from './RollDice.module.css';
import Die from '../Die/Die';

export default class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  state = {
    die1: 'one',
    die2: 'one',
    rolling: false
  };

  rollDiceHandler = () => {
    const randNumber1 = Math.floor(Math.random() * this.props.sides.length);
    const randNumber2 = Math.floor(Math.random() * this.props.sides.length);
    const dice1 = this.props.sides[randNumber1];
    const dice2 = this.props.sides[randNumber2];

    this.setState({ die1: dice1, die2: dice2, rolling: true });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className={classes.RollDice}>
        <div className={classes.RollDice_container}>
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.rollDiceHandler} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}
