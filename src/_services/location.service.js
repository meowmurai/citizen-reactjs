import {env} from '../_constants';
import { authHeader } from '../_helpers';

export const locationService = {
    create,
};

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

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //window.location.reload(true);
            }

            const error = (data && data.details) || response.statusText;
            return Promise.reject(error);
        }

        return data.messages;
    });
}
