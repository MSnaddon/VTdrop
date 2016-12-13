import React from 'react'

import PlayerObject from './playerObject';
import Input from './input';
import Output from './output';

// a React component like any other. check the console log in browser to see what is being handed down as props.

export default class GameContainer extends React.Component {

	handleAddNumber(event){
		event.preventDefault();
		if(this.refs.number.value%1 == 0 && this.refs.number.value !== ''){
			this.props.addSpecificToArray(this.refs.number.value);
			this.refs.addNumberForm.reset()
		}
	}

	render(){
		console.log(this)
		
		return (
			<div>

				<PlayerObject player={ this.props.player }/>
				<Input runCode={ this.props.runCode }/>
				<Output output={ this.props.output }/>
			</div>
			)
	}
}