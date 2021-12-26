import { alertActions } from './'
import { taskService } from '../_services'
import { taskConstants } from '../_constants'

export const taskActions = {
    getTaskStatus,
    insertSurvey,
    fileUpload,
    templateDownload,
    getSurveys,
    deleteOneRow
};
function getSurveys(onSuccess=()=>{}) {
    return dispatch => {
        dispatch(request())

        taskService.getSurveys()
            .then(
                messages => {
                    dispatch(success(messages.data))
                    onSuccess()
                    
                },
                error => {
                    dispatch(alertActions.error(error))
                    dispatch(failure(error))
                }
            )
    }
    function request() { return { type: taskConstants.GET_SURVEYS_REQUEST } }
    function success(data) { return { type: taskConstants.GET_SURVEYS_SUCCESS, data } }
    function failure(error) { return { type: taskConstants.GET_SURVEYS_FAILURE, error } }
}
function fileUpload(file, onSuccess=()=>{}, onFailed=()=>{}) {
    return dispatch => {
        if(!file){
            onFailed()
            return dispatch(alertActions.error('please select a file first.'))
        }
        taskService.fileUpload(file)
            .then(
                messages => {
                    dispatch(alertActions.success('File uploaded'))
                    onSuccess()
                    
                },
                error => {
                    dispatch(alertActions.error(error))
                    onFailed()
                }
            )
    }
}
function templateDownload(onSuccess=()=>{}) {
    return dispatch => {
        taskService.templateDownload()
            .then(
                messages => {
                    onSuccess()
                },
                error => {
                    dispatch(alertActions.error(error))
                }
            )
    }
}

function getTaskStatus(onSuccess=()=>{}) {
    return dispatch => {
        dispatch(request())

        taskService.getTaskStatus()
            .then(
                messages => {
                    dispatch(success(messages.data))
                    onSuccess()
                    
                },
                error => {
                    dispatch(alertActions.error(error))
                    dispatch(failure(error))
                }
            )
    }
    function request() { return { type: taskConstants.GET_STATUS_REQUEST } }
    function success(data) { return { type: taskConstants.GET_STATUS_SUCCESS, data } }
    function failure(error) { return { type: taskConstants.GET_STATUS_FAILURE, error } }
}
function insertSurvey(form){
    return dispatch => {
        taskService.insertSurvey(form)
            .then(
                messages => dispatch(alertActions.success('insert successfully')),
                error => dispatch(alertActions.error(error))
            )
    }
}
function deleteOneRow(id, onSuccess=()=>{}){
    return dispatch => {
        taskService.deleteOneRow(id)
            .then(
                messages => {
                    dispatch(alertActions.success('deleted'))
                    onSuccess()
                },
                error => dispatch(alertActions.error(error))
            )
    }
}
