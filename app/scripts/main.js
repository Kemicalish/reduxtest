require('babel-polyfill');

const _				= require('lodash');
const $				= require('jquery');

const constants		= require('./constants');
const device		= require('./core/device'); 
const router		= require('./core/router');

router.addRoute('', displayHome ); 

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

function displayHome(){
	//Init your default landing page here
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	)
}


$(document).ready(function($){
	device.init()
		.then(router.init)
		//.then(Do your init stuff)
		.then(entry => router.trigger(window.location.pathname.substring(1)))
});

