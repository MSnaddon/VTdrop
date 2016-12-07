import {combineReducers} from 'redux';

// import reducers for branches of state
import testReducer from './test_reducer'
import player from './player'
import output from './output'

const routedReducers = combineReducers({
	test: testReducer,
	player: player,
	output: output
})

export default routedReducers