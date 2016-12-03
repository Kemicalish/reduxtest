var React = require('react');
var Masonry = require('react-masonry-component');



const Poster = React.createClass({

    render: function () {
        //TODO: active should be an internal props
        //TODO: add an action.type TOGGLE_POSTER_ACTIVE <PosterId>
        const { store } = this.context;
        const {id, src, onClick, active } = this.props.image; 
        const onPosterClick = e => {
            store.dispatch({
                type:'TOGGLE_IMAGE_ACTIVE',
                id:id
            })
            if (onClick)
                onClick(id);
        };

        var className = "image-element-class " + (active ? 'active' : 'not-active');

        return (<div key={id} className={className} onClick={onPosterClick} >
            <img src={src} />
        </div>
        );
    }
});
Poster.contextTypes ={
    store: React.PropTypes.object
}

export {
    Poster
} 