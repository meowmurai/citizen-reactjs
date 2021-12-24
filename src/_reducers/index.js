import { combineReducers } from 'redux'

import { authentication } from './authentication.reducer'
import { users } from './users.reducer'
import { locations } from './locations.reducer'
import { createUser } from './createuser.reducer'
import { alert } from './alert.reducer'
import { modal } from './modal.reducer'
import { tasks } from './tasks.reducers'

const rootReducer = combineReducers({
  authentication,
  users,
  createUser,
  locations,
  alert,
  modal,
  tasks
})

export default rootReducer