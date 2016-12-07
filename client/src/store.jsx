import {createStore} from 'redux';

import routedReducers from './reducers/index';

const defaultState = {
	test: [0, 1, 2, 3, 4],
	player: {
		name: "Sir Thor"
	},
	output: ["This is a string output woo"]
}


const store = createStore(routedReducers, defaultState)

export default store;