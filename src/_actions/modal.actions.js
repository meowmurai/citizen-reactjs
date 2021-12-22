import { modalConstants } from '../_constants';

export const modalActions = {
    login,
    addUser,
    addSchedule,
    close
};

function login() {
    return { type: modalConstants.SHOW_LOGIN };
}
function addUser() {
    return { type: modalConstants.SHOW_ADD };
}
function addSchedule(username) {
    return { type: modalConstants.SHOW_SCHEDULE, payload: {username: username}};
}
function close() {
    return { type: modalConstants.CLOSE_ALL };
}