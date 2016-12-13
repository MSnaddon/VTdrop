import React from 'react'

import PlayerObject from './playerObject';
import Input from './input';
import Output from './output';

// a React component like any other. check the console log in browser to see what is being handed down as props.

export default class GameContainer extends React.Component {
	render(){
		console.log("props on GameContainer",this.props)
		return (
			<div>

				<PlayerObject player={ this.props.player }/>
				<Input runCode={ this.props.runCode } />
				<Output output={ this.props.output }/>
			</div>
			)
	}
}