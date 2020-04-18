import React from 'react';
import logo from './logo.svg';
import './App.css';
import DiceGame from './DiceGame';

function App() {
	return (
		<div className="App">
			<h1 className="App-header">Dice Roller</h1>
			<DiceGame />
		</div>
	);
}

export default App;
