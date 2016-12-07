import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import GameContainer from './gameContainer'

// The map to props function sets them to be container props
// eg <Component prop={mapStateToProps}/>
// the connect function attaches these to a presentation component.

function mapStateToProps(state){
	return {
		test: state.test
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}


const Main = connect(mapStateToProps, mapDispatchToProps)(GameContainer);

export default Main;