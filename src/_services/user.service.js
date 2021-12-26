import {env} from '../_constants';
import { authHeader } from '../_helpers';
import { handleResponse } from '.';

export const userService = {
    login,
    logout,
    create,
    setActivate,
    addSchedule,
    del,
    getChildsUser
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${env.apiUrl}/login`, requestOptions)
        .then(handleResponse)
        .then(messages => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(messages));
            return messages;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    
}

function getChildsUser() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${env.userApiUrl}/childs/user`, requestOptions)
            .then(handleResponse)
            .then(messages => {
                return messages.data
            })
}

function create(username, email, password, manage_location, role, avtConfig) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify({ username, email, password, manage_location, role, avtConfig })
    };

    return fetch(`${env.userApiUrl}/create`, requestOptions)
            .then(handleResponse)
            .then(messages => {
                return messages
            })
}

function del(username) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
    };
    return fetch(`${env.userApiUrl}/delete`, requestOptions)
        .then(handleResponse)
        .then(messages => {
            return messages
        })
}

function setActivate(username, is_activate) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, is_active: is_activate })
    };
    return fetch(`${env.userApiUrl}/childs/authorize/state`, requestOptions)
        .then(handleResponse)
        .then(messages => {

            return messages
        })
}

function addSchedule(username, start_time, end_time) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, start_time, end_time })
    };
    return fetch(`${env.userApiUrl}/childs/authorize/time`, requestOptions)
        .then(handleResponse)
        .then(messages => {
            return messages
        })
}
