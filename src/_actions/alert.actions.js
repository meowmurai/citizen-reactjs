import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    remove,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}
function remove(id) {
    return { type: alertConstants.REMOVE, id};
}
function clear() {
    return { type: alertConstants.CLEAR };
}