import {env} from '../_constants';
import { authHeader } from '../_helpers';
import { handleResponse } from '.';

export const locationService = {
    create,
    getChildsLocation,
    getLocation
};

function getLocation(code) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${env.LocationApiUrl}/${code}/childs`, requestOptions)
        .then(handleResponse)
        .then(messages => {
            return messages;
        });
}

function create(name, code) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, code })
    };

    return fetch(`${env.LocationApiUrl}/create`, requestOptions)
        .then(handleResponse)
        .then(messages => {
            return messages;
        });
}
function getChildsLocation() {
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
