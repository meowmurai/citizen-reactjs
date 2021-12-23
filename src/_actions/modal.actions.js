import { modalConstants } from '../_constants';

export const modalActions = {
    login,
    addUser,
    addLocation,
    addSchedule,
    close
};

function login() {
    return { type: modalConstants.SHOW_LOGIN };
}
function addUser() {
    return { type: modalConstants.SHOW_ADD_USER };
}
function addLocation() {
    return { type: modalConstants.SHOW_ADD_LOCATION };
}
function addSchedule(username) {
    return { type: modalConstants.SHOW_SCHEDULE, payload: {username: username}};
}
function close() {
    return { type: modalConstants.CLOSE_ALL };
}