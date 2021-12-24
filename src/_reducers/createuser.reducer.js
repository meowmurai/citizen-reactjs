import { userConstants } from '../_constants';

export function createUser(state = {loading: false}, action) {
  switch (action.type) {
    case userConstants.CREATE_REQUEST:
      return {
        loading: true
      };
    case userConstants.CREATE_SUCCESS:
      return {
        loading: false
      };
    case userConstants.CREATE_FAILURE:
      return { 
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}