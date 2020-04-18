import React, { Component } from 'react';
import './DiceGame.css';
import Die from './Die';

export default class DiceGame extends Component {
	static defaultProps = {
		sides: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};

	constructor(props) {
		super(props);
		this.state = {
			die1: 'one',
			die2: 'one',
			isRolling: false
		};

		this.rollClickHandler = this.rollClickHandler.bind(this);
	}

	getDie = () => {
		return this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
	};

	rollClickHandler = (e) => {
		this.setState({ isRolling: true });

		setTimeout(() => {
			this.setState({ die1: this.getDie(), die2: this.getDie() });
		}, 500);

		setTimeout(() => {
			this.setState({ die1: this.getDie(), die2: this.getDie() });
		}, 750);

		setTimeout(() => {
			this.setState({ die1: this.getDie(), die2: this.getDie(), isRolling: false });
		}, 1000);
	};

	render() {
		return (
			<div className="DiceGame">
				<div className="DiceGame-dice">
					<Die number={this.state.die1} isRolling={this.state.isRolling} />
					<Die number={this.state.die2} isRolling={this.state.isRolling} />
				</div>
				<button
					className={this.state.isRolling ? 'DiceGame-rollButton is-rolling' : 'DiceGame-rollButton'}
					disabled={this.state.isRolling}
					onClick={this.rollClickHandler}
				>
					{this.state.isRolling ? 'Rolling...' : 'Roll Dice'}
				</button>
			</div>
		);
	}
}
