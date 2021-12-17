import { modalConstants } from '../_constants';

export const modalActions = {
    login,
    addUser,
    close
};

function login() {
    return { type: modalConstants.SHOW_LOGIN };
}
function addUser() {
    return { type: modalConstants.SHOW_ADD };
}
function close() {
    return { type: modalConstants.CLOSE_ALL };
}