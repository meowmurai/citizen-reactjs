import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true,loading: false, user } : {loading: false};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        loading: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loading: false,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {loading: false};
    case userConstants.LOGOUT:
      return {loading: false};
    default:
      return state
  }
}