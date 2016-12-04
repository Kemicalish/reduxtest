const _				= require('lodash');


const project = (state = {
    active:{
        isPlaceholder:true,
        cover:'placeholder'
    }
}, action) => {
  switch (action.type) {
    case 'SHOW_PROJECT':
        return {...state, active:action.project}
    default:
      return state
  }
}

export default project