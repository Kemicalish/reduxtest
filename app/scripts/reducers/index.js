import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import gallery from './gallery'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  gallery
})

export default todoApp