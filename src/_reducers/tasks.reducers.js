import { taskConstants } from '../_constants';

export function tasks(state = {survey: {}, status: {}}, action) {
  switch (action.type) {
    case taskConstants.GET_SURVEYS_REQUEST:
      return {
        ...state,
        survey: {
          loading: true,
        }
      };
    case taskConstants.GET_SURVEYS_SUCCESS:
      return {
        ...state,
        survey: {
          loading: false,
          data: action.data
        }
      };
    case taskConstants.GET_SURVEYS_FAILURE:
      return {
        ...state,
        survey: {
          error: action.error
        }
      };

    case taskConstants.GET_STATUS_REQUEST:
      return {
        ...state,
        status: {
          loading: true,
        }
      };
    case taskConstants.GET_STATUS_SUCCESS:
      return {
        ...state,
        status: {
          loading: false,
          data: action.data
        }
      };
    case taskConstants.GET_STATUS_FAILURE:
      return {
        ...state,
        status: {
          error: action.error
        }
      };
    default:
      return state
  }
}