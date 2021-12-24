import { alertActions } from './'
import { surveyService } from '../_services'
import { taskConstants } from '../_constants'

export const taskActions = {
    getTaskStatus,
};


function getTaskStatus(onSuccess=()=>{}) {
    return dispatch => {
        dispatch(request())

        surveyService.getTaskStatus()
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
