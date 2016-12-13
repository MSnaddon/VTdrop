import React from 'react';

export default class ConsoleOutput extends React.Component {
	render(){

		const outputFeed = this.props.output.map((outputItem, index)=>{
			return (
				<div key={index}>
					<h5>{outputItem}</h5>
				</div>
			)
		})

		return (
			<section id='output-window'>
				<p>Console</p>
				{outputFeed}
				<hr/>
			</section>
		)
	}

}