import {combineReducers} from 'redux';

// import reducers for branches of state
import testReducer from './test_reducer'
// eg 
// import posts from "./posts"
// import comments from "./comments"

const routedReducers = combineReducers({
	test: testReducer
})

export default routedReducers