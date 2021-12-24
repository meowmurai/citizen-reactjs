import { userConstants } from '../_constants';

export function locations(state = {}, action) {
  switch (action.type) {
    case userConstants.GETCHILDLOCATIONS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GETCHILDLOCATIONS_SUCCESS:
      return {
        items: action.locations
      };
    case userConstants.GETCHILDLOCATIONS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state
  }
}