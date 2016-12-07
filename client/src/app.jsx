import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

// import store methods
import { Provider } from 'react-redux'
import store from './store'

import Main from './components/main'


const content = (
	<Provider store={store}>
		<Main/>
	</Provider>
	)


window.onload = () => {
	const container = document.getElementById("main")
	render(content, container)
}