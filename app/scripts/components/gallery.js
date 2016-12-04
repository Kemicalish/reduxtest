var React = require('react');
var Masonry = require('react-masonry-component');
import { connect } from 'react-redux'
import { Poster } from './poster.js'


var masonryOptions = {
    transitionDuration: 0
};

var Gallery = React.createClass({

    handleImagesLoaded: function(imagesLoadedInstance) {
        const { store } = this.context;
        if(store.getState().gallery.visibility !== 'SHOWN')
            store.dispatch({
                type:'SHOW_GALLERY'
            });
            
    },
    render: function () {
        const { store } = this.context;

        var childElements = store.getState().gallery.images.map(function(image){
           return ( <Poster key={image.id} image={image} /> );
        });

        return (
            <Masonry
                className={'projects-gallery ' + store.getState().gallery.visibility.toLowerCase() } // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                onImagesLoaded={this.handleImagesLoaded}
            >
                {childElements}
            </Masonry>
        );
    }
});
Gallery.contextTypes ={
    store: React.PropTypes.object
}
export default Gallery;