import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import gallery from './gallery'
import project from './project'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  gallery,
  project
})

export default todoApp