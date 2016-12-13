import React from 'react';

export default class ConsoleInput extends React.Component {

	handleCodeSubmit(event){
		event.preventDefault()
		if(this.refs.code.value !== ""){
			// initially this is just plugging whatever you put in through the run code action. Later this should be tested before it gets passed through the redux.
			// if the test is sucessful they can make the appropiate changes to the state.
			// if the test is unsucessful then another action can be written to change the state to indicate the player is a pillock.
			this.props.runCode(this.refs.code.value);
			this.refs.codeInput.reset();
		}
	}

	render(){
		return (
			<section id='input-window'>
				<p>Coding</p>
				<form ref="codeInput" onSubmit={this.handleCodeSubmit.bind(this)} autoComplete='off'>
					<input hidden autoComplete='false'/>
					<input ref='code' type="text" name="array-input"/>
					<input type="submit" hidden/>
				</form>

			</section>
		)
	}

}