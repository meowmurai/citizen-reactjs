import { combineReducers } from 'redux'

import { authentication } from './authentication.reducer'
import { users } from './users.reducer'
import { locations } from './locations.reducer'
import { createUser } from './createuser.reducer'
import { alert } from './alert.reducer'
import { modal } from './modal.reducer'

const rootReducer = combineReducers({
  authentication,
  users,
  createUser,
  locations,
  alert,
  modal
})

export default rootReducer