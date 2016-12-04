const _				= require('lodash');
const _defaultState = {
        active:{
            isPlaceholder:true
        },
        visibility:'hidden'
    };

const project = (state =_defaultState, action) => {
  switch (action.type) {
    case 'OPEN_PROJECT_DETAILS':
        return {...state, visibility:'shown', active:action.project}
    case 'CLOSE_PROJECT_DETAILS':
        return {...state, visibility:'hidden'}
    default:
      return state
  }
}

export default project