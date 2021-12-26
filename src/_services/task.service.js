import {env} from '../_constants';
import { authHeader } from '../_helpers';
import { handleResponse } from '.';

export const taskService = {
    getTaskStatus,
    insertSurvey,
    fileUpload,
    templateDownload,
    getSurveys,
    deleteOneRow
};
function getSurveys() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${env.SurveyApiUrl}/citizens`,requestOptions)
        .then(handleResponse)
        .then(messages => {
            return messages;
        });
}
function templateDownload() {
    const requestOptions = {
        method: 'GET',
        headers: {...authHeader(), accept: '*/*'}
    };

    return fetch(`${env.SurveyApiUrl}/template/download`,requestOptions)
        .then(res => res.blob())
        .then( blob => {
            var file = window.URL.createObjectURL(blob);
            window.location.assign(file);
            return null
        })
}
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
function insertSurvey(form) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    };

    return fetch(`${env.SurveyApiUrl}/insert`,requestOptions)
        .then(handleResponse)
        .then(messages => {
            return messages;
        });
}
function fileUpload(file) {
    const formData = new FormData()
    formData.append('File', file)
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'multipart/form-data'},
        body: formData
    };

    return fetch(`${env.SurveyApiUrl}/upload_file`,requestOptions)
        .then(handleResponse)
        .then(messages => {
            return messages;
        });
}

function deleteOneRow(id) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify({identity_number: id})
    };
    console.log(id)
    return fetch(`${env.SurveyApiUrl}/citizen/delete`,requestOptions)
        .then(handleResponse)
        .then(messages => {
            return messages;
        });
}

