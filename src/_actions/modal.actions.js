import { modalConstants } from '../_constants';

export const modalActions = {
    login,
    addUser,
    addUserToExistLocation,
    addLocation,
    updateLocation,
    addSchedule,
    close
};

function login() {
    return { type: modalConstants.SHOW_LOGIN };
}
function addUser() {
    return { type: modalConstants.SHOW_ADD_USER };
}
function addUserToExistLocation(form) {
    return { type: modalConstants.SHOW_ADD_USER, payload: {...form, isUpdate: true} };
}
function addLocation() {
    return { type: modalConstants.SHOW_ADD_LOCATION };
}
function updateLocation(form) {
    return { type: modalConstants.SHOW_ADD_LOCATION, payload: {...form, isUpdate: true} };
}
function addSchedule(username) {
    return { type: modalConstants.SHOW_SCHEDULE, payload: {username: username}};
}
function close() {
    return { type: modalConstants.CLOSE_ALL };
}