const _				= require('lodash');

function reorderImages(images){
    return _.chain(images)
            .orderBy(['active'], ['desc'])
            .value();
}   



const gallery = (state = {
    type:'COLLAPSED',
    visibility:'HIDDEN',
    images:[]
}, action) => {
  switch (action.type) {
    case 'SHOW_GALLERY':
        return {...state, visibility:'SHOWN'}
    case 'HIDE_GALLERY':
        return {...state, visibility:'HIDDEN'}
    case 'ADD_GALLERY_IMG':
          return {...state, 
              images: [...state.images, {
                  id: action.id,
                  src: action.src,
                  active:false
              }]};
    case 'ADD_ALL_GALLERY_IMG':
        return {...state, 
                images: action.images.map(i => {return{...i, active:false};})}
    case 'TOGGLE_IMAGE_ACTIVE':
         return {...state, 
                    images: state.images.map(img => img.id !== action.id ? img : {...img, active:!img.active})}
    default:
      return state
  }
}

export default gallery