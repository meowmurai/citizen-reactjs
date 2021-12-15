import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';

export const userActions = {
    login,
    logout,
    getChildsUser,
    getChildsAll
};

function login(username, password, onSuccess) {
    return dispatch => {
        dispatch(request({ username }))

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user))
                    dispatch(alertActions.success('login succeed'))
                    onSuccess()
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            )
        
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getChildsUser() {
    return dispatch => {
        dispatch(request());

        userService.getChildsUser()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            )
    };

    function request() { return { type: userConstants.GETCHILDS_REQUEST } }
    function success(users) { return { type: userConstants.GETCHILDS_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETCHILDS_FAILURE, error } }
}
function getChildsAll() {
    return dispatch => {
        dispatch(request());

        userService.getChildsAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            )
    };

    function request() { return { type: userConstants.GETCHILDS_REQUEST } }
    function success(users) { return { type: userConstants.GETCHILDS_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETCHILDS_FAILURE, error } }
}