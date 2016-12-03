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

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



const galleryPosters = [
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
    'http://www.publicdomainpictures.net/pictures/20000/t2/portrait-of-lioness-112940816603Iz.jpg',
    'http://www.publicdomainpictures.net/pictures/20000/t2/small-stream-11299071647wvI.jpg',
    'http://www.publicdomainpictures.net/pictures/90000/t2/wine-cork-background.jpg',
    'http://thumb11.shutterstock.com/thumb_large/106495/106495,1225106844,1/stock-photo-funny-kitten-19546774.jpg',
    'http://www.publicdomainpictures.net/pictures/40000/t2/aisle-st-mark-church-pensnett-1362570664iKo.jpg',
    'http://www.publicdomainpictures.net/pictures/10000/t2/965-12392731797CyO.jpg'
].map((img, i) => { return { 
	id:i, 
	src: img,
	onClick:console.log.bind(null, 'image click')
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

