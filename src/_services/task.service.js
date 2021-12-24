import {env} from '../_constants';
import { authHeader } from '../_helpers';

export const surveyService = {
    getTaskStatus,
};
function getTaskStatus() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${env.userApiUrl}/childs/survey_time`,requestOptions)
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
