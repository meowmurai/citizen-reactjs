import { locationConstants, userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { validateEmail } from '../_helpers';

export const userActions = {
    login,
    logout,
    create,
    update,
    setActivate,
    addSchedule,
    del,
    getChildsUser
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
function update(users) {
    return { type: userConstants.USERS_UPDATE, payload: {users: users}}
}
function create(form, onSuccess=()=>{}) {
    return dispatch => {
        const {username, email, password, location_code, role, avtConfig} = {...form}
        if(!(username && email && password && location_code && role))
            return dispatch(alertActions.error('please fill in the form'))
        if( username !== location_code ){
            return dispatch(alertActions.error('username\'s not match location code'))
        }
        if( !validateEmail(email) ){
            return dispatch(alertActions.error('invalid email!'))
        }
        dispatch(request())

        userService.create(username, email, password, location_code, role, avtConfig)
            .then(
                message => {
                    dispatch(success())
                    dispatch(alertActions.success('user\'s created successfully'))
                    onSuccess()
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            )
        
    }

    function request() { return { type: userConstants.CREATE_REQUEST } }
    function success() { return { type: userConstants.CREATE_SUCCESS } }
    function failure(error) { return { type: userConstants.CREATE_FAILURE, error } }
}

function del(username,onSuccess=()=>{}) {
    return dispatch => {
        userService.del(username)
            .then(
                message => {
                    dispatch(alertActions.success('user\'s deleted'))
                    onSuccess()
                },
                error => {
                    dispatch(alertActions.error(error))
                }
            )
    }
}

function setActivate(username, is_activate,onSuccess=()=>{}) {
    return dispatch => {
        userService.setActivate(username, is_activate)
            .then(
                message => {
                    dispatch(alertActions.success('success'))
                    onSuccess()
                },
                error => {
                    dispatch(alertActions.error(error))
                }
            )
    }
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

function addSchedule(username, start_time, end_time, onSuccess, onFail) {
    return dispatch => {
        userService.addSchedule(username, (start_time.getTime()/1000).toString(), (end_time.getTime()/1000).toString())
            .then(
                messages => {
                    dispatch(alertActions.success('create schedule successfully'))
                    onSuccess()
                },
                error => {
                    dispatch(alertActions.error(error))
                    onFail()
                }
            )
    }
}

