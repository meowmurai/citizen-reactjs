import { modalConstants } from '../_constants';

export function modal(state = {overlay: false}, action) {
    switch (action.type) {
        case modalConstants.SHOW_OVERLAY:
            return {
                ...state,
                overlay: true
            }
        case modalConstants.HIDE_OVERLAY:
            return {
                ...state,
                overlay: false
            }
        case modalConstants.SHOW_LOGIN:
            return {
                ...state,
                overlay: true,
                name: 'login',
                show: true
            }  
        case modalConstants.CLOSE_ALL:
            return {
                ...state,
                overlay: false,
                name: '',
                show: false
            }
        default:
            return state
    }
}