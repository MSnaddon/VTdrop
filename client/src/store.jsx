import {createStore} from 'redux';

import routedReducers from './reducers/index';

const defaultState = {
	test: [0, 1, 2, 3, 4],
	player: {
		hp: 100
	},
	output: ["This is the first output"]
}


const store = createStore(routedReducers, defaultState)

export default store;