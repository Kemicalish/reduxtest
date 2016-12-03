var React = require('react');
var Masonry = require('react-masonry-component');
import { connect } from 'react-redux'
import { Poster } from './poster.js'


var masonryOptions = {
    transitionDuration: 300
};

var Gallery = React.createClass({
    render: function () {
        const { store } = this.context;
        console.log('GET STATE', store.getState().gallery);
        const onImageClick = () => console.log.bind(null, 'CLICK IMAGE');
        var childElements = store.getState().gallery.images.map(function(image){
           return ( <Poster key={image.id} image={image} /> );
        });

        return (
            <Masonry
                className={'projects-gallery'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
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