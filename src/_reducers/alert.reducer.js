import { alertConstants } from '../_constants';

export const alert = (state = [{id:'1',type: 'alert-danger', message:"hello, world"},{id:'2',type: 'alert-success', message:"hello, world"}], action) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return [...state,{
          id: Date.now(),
          type: 'alert-success',
          message: action.message
      }]
    case alertConstants.ERROR:
      return [...state,{
         id: Date.now(),
        type: 'alert-danger',
        message: action.message
      }]
    case alertConstants.REMOVE:
      return state.filter(e => e.id != action.id)
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}