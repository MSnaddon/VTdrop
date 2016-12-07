import {createStore} from 'redux';

import routedReducers from './reducers/index';

const defaultState = {
	test: [0, 1, 2, 3, 4]
}


const store = createStore(routedReducers, defaultState)

export default store;