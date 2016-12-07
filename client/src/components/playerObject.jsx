import React from 'react';

export default class PlayerObject extends React.Component {
	render(){
		return (
			<h4>{JSON.stringify(this.props.player)}</h4>
		)
	}

}