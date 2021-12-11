import {env} from '../_constants';
import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    getChilds
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${env.apiUrl}/v1/login`, requestOptions)
        .then(handleResponse)
        .then(messages => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(messages.token));

            return messages.token;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    
}

function getChilds() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${env.apiUrl}/v1/user/childs/all`, requestOptions)
            .then(handleResponse)
            .then(messages => {
                return messages.data
            })
}
function create() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${env.apiUrl}/v1/user/childs/all`, requestOptions)
            .then(handleResponse)
            .then(messages => {
                return messages.data
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