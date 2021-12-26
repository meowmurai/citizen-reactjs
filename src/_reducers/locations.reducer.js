import { locationConstants } from '../_constants';

export function locations(state = {}, action) {
  switch (action.type) {
    case locationConstants.LOCATIONS_UPDATE:
      return {
        ...state,
        items: action.payload.locations
      }
    case locationConstants.GETCHILDLOCATIONS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case locationConstants.GETCHILDLOCATIONS_SUCCESS:
      return {
        items: action.locations
      };
    case locationConstants.GETCHILDLOCATIONS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state
  }
}