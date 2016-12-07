import React from 'react'

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
		console.log(this.props)
		return (
			<div>
				<form ref="addNumberForm" onSubmit={this.handleAddNumber.bind(this)} autoComplete='off'>
					<input hidden autoComplete='false'/>
					<input ref='number' type="text" name="array-input"/>
					<input type="submit" hidden/>
				</form>
				<button onClick={this.props.extendArray}>Extend array</button>
				<p>Array = [ {this.props.test.join(", ")} ]</p>
			</div>
			)
	}
}