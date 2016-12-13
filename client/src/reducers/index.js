import {combineReducers} from 'redux';

// import reducers for branches of state
import player from './player'
import output from './output'

const routedReducers = combineReducers({
	player: player,
	output: output
})

export default routedReducers