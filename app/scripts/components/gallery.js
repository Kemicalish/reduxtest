var React = require('react');
var Masonry = require('react-masonry-component');
import { connect } from 'react-redux'

var masonryOptions = {
    transitionDuration: 300
};

var Gallery = React.createClass({
    render: function () {
        const { store } = this.context;
        var childElements = store.getState().gallery.map(function(element){
           return (
                <div key={element.id} className="image-element-class">
                    <img src={element.src} />
                </div>
            );
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
module.exports = Gallery;