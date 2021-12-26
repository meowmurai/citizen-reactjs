import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.USERS_UPDATE:
      return{
        ...state,
        items: action.payload.users
      }
    case userConstants.GETCHILDS_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETCHILDS_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETCHILDS_FAILURE:
      return { 
        error: action.error
      };

    default:
      return state
  }
}