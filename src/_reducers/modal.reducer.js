import { modalConstants } from '../_constants';

export function modal(state = {overlay: false}, action) {
    switch (action.type) {
        case modalConstants.SHOW_LOGIN:
            return {
                ...state,
                overlay: true,
                name: 'login',
                show: true
            }
        case modalConstants.SHOW_ADD:
            return {
                ...state,
                overlay: true,
                name: 'add_user',
                show: true
            }  
        case modalConstants.SHOW_SCHEDULE:
            return {
                ...state,
                overlay: true,
                name: 'add_schedule',
                payload: action.payload,
                show: true
            } 
        case modalConstants.CLOSE_ALL:
            return {
                overlay: false,
                show: false
            }
        default:
            return state
    }
}