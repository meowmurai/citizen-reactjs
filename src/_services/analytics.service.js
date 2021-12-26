import {env} from '../_constants';
import { authHeader } from '../_helpers';

export const analyticService = {
    getOccupationData,
    getAgeDistPerGender,
    getCoordinateOfChilds,
    getCoordinateOfChildsOfLoc,
    getSurveyLocCountData,
};

function getOccupationData(codes) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ codes })
    };

    return fetch(`${env.SurveyApiUrl}/location/occupation`, requestOptions)
        .then(handleResponse)
        .then(messages => {
            
            return messages;
        });
}

function getAgeDistPerGender(gender, codes) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ codes })
    };

    return fetch(`${env.SurveyApiUrl}/location/age-dist?gender=${gender}`, requestOptions)
        .then(handleResponse)
        .then(messages => {
            return messages;
        });
}

function getSurveyLocCountData(codes) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ codes })
    };

    return fetch(`${env.SurveyApiUrl}/location/count`, requestOptions)
        .then(handleResponse)
        .then(messages => {
            return messages;
        });
}

function getCoordinateOfChilds(onSuccess = () => {}) {
    const requestOptions = {
        method: 'GET',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
    };

    return fetch(`${env.LocationApiUrl}/childs/coordinates`, requestOptions)
        .then(handleResponse)
        .then(messages => {
            onSuccess(messages)
            console.log(messages)
            return messages;
        });
}

function getCoordinateOfChildsOfLoc(code) {
    const requestOptions = {
        method: 'GET',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
    };

    return fetch(`${env.SurveyApiUrl}/${code}/childs/coordinates`, requestOptions)
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