import React, { Component } from 'react';
import './Die.css';

export default class Die extends Component {
	render() {
		return (
			<div className="Die">
				<i
					className={`Die-face fas fa-dice-${this.props.number} ${this.props.isRolling
						? 'Die-is-rolling'
						: ''}`}
				/>
			</div>
		);
	}
}
