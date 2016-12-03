const gallery = (state = {
    type:'COLLAPSED',
    images:[]
}, action) => {
  switch (action.type) {
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