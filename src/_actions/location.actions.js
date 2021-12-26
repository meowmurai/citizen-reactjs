import { alertActions } from './';
import { locationService } from '../_services';
import { modalActions } from './modal.actions';
import { modalConstants, userConstants, locationConstants } from '../_constants';

export const locationActions = {
    create,
    update,
    getLocation,
    getChildsLocation
};
function update(locations) {
    return { type: locationConstants.LOCATIONS_UPDATE, payload: {locations: locations}}
}
function getLocation(code, onSuccess=()=>{}) {
    return dispatch => {
        // let pattern = /^[0-9]{2}$/
        // if(code !== "0" && !pattern.test(code)){
        //     return dispatch(alertActions.error('invalid location code'))
        // }
        let pattern = /^[0-9]+$/
        if(!pattern.test(code)){
            return dispatch(alertActions.error('invalid location code'))
        }
        locationService.getLocation(code)
            .then(
                messages => onSuccess(messages.data),
                error => dispatch(alertActions.error(error))
            )
    }
}

function create(form, onSuccess=()=>{}) {
    return dispatch => {
        const {name, code} = {...form}

        locationService.create(name, code)
            .then(
                messages => {
                    dispatch(alertActions.success('location\'s created successfully'))
                    dispatch(modalActions.addUserToExistLocation(form))
                    onSuccess()
                    
                },
                error => {
                    dispatch(alertActions.error(error))
                }
            )
    }
}
function getChildsLocation() {
    return dispatch => {
        dispatch(request())

        locationService.getChildsLocation()
            .then(
                locations => dispatch(success(locations)),
                error => dispatch(failure(error))
            )
    }

    function request() { return { type: locationConstants.GETCHILDLOCATIONS_REQUEST } }
    function success(locations) { return { type: locationConstants.GETCHILDLOCATIONS_SUCCESS, locations } }
    function failure(error) { return { type: locationConstants.GETCHILDLOCATIONS_FAILURE, error } }
}
