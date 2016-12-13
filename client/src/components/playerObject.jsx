import React from 'react';

export default class PlayerObject extends React.Component {
	render(){
		return (
			<div>
				<h4>{JSON.stringify(this.props.player)}</h4>
				<hr/>
			</div>
		)
	}

}