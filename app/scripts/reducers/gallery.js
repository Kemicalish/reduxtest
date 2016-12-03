const gallery = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GALLERY_IMG':
      return [...state,{
        id: action.id,
        src: action.src
      }]
    default:
      return state
  }
}

export default gallery