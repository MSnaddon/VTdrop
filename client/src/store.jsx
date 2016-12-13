import {createStore} from 'redux';

import routedReducers from './reducers/index';

const defaultState = {
	player: {
		name: "Sir Thor"
	},
	output: ["This is a string output woo", "this is another string output", "Noooo stop, it will go too far"]
};


const store = createStore(routedReducers, defaultState)

export default store;