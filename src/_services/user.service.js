import {env} from '../_constants';
import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    create,
    setActivate,
    addSchedule,
    del,
    getChildsUser,
    getChildsAll
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
function getChildsAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${env.userApiUrl}/childs/all`, requestOptions)
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

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.details) || response.statusText;
            return Promise.reject(error);
        }

        return data.messages;
    });
}