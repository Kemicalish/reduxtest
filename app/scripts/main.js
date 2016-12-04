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


//TODO: switch creatstore with dev tools only if env="development"
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const projects = [
	{
		poster:'http://www.potion-of-wit.com/images/ref-thumb-r6.jpg',
		cover:'http://www.potion-of-wit.com/images/r6-header.jpg'
	},
	{
		poster:'http://www.potion-of-wit.com/images/ref-thumb-bak.jpg',
		cover:'http://www.potion-of-wit.com/images/bak-header.jpg'
	},
	{
		poster:'http://www.potion-of-wit.com/images/ref-thumb-ico-dashboard.jpg',
		cover:'http://www.potion-of-wit.com/images/bak-header.jpg'
	},
	{
		poster:'http://www.potion-of-wit.com/images/ref-thumb-lovelydays.jpg',
		cover:'http://www.potion-of-wit.com/images/bak-header.jpg'
	},
	{
		poster:'http://www.potion-of-wit.com/images/ref-thumb-the-order.jpg',
		cover:'http://www.potion-of-wit.com/images/bak-header.jpg'
	},
	{
		poster:'http://www.potion-of-wit.com/images/ref-thumb-sony-shop.jpg',
		cover:'http://www.potion-of-wit.com/images/bak-header.jpg'
	},
	{
		poster:'http://www.potion-of-wit.com/images/ref-thumb-lbp3.jpg',
		cover:'http://www.potion-of-wit.com/images/bak-header.jpg'
	},
	{
		poster:'http://www.potion-of-wit.com/images/ref-thumb-abu-dhabi.jpg',
		cover:'http://www.potion-of-wit.com/images/bak-header.jpg'
	}
];

const galleryPosters = projects
	.map((project, i) => { return { 
	id:i, 
	src: project.poster,
	onClick:() =>{
		store.dispatch({
			type:'SHOW_PROJECT',
			project:projects[i]
		})
	}
}; });


/*
let imgIndex = 0;
$('.add-img').click(()=>{
	if(imgIndex < galleryPosters.length)
		store.dispatch({...galleryPosters[imgIndex++], type:'ADD_GALLERY_IMG'});
}).click();*/

console.log(galleryPosters);

store.subscribe(displayHome);
store.dispatch({
		type:'ADD_ALL_GALLERY_IMG',
		images:galleryPosters
	});

function displayHome(){
	//Init your default landing page here
	console.log('HOME');
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

