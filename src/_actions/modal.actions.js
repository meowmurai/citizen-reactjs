import { modalConstants } from '../_constants';

export const modalActions = {
    login,
    close
};

function login() {
    return { type: modalConstants.SHOW_OVERLAY };
}

function close() {
    return { type: modalConstants.CLOSE_ALL };
}