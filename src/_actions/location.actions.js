import { alertActions } from './';
import { locationService } from '../_services';
import { modalConstants } from '../_constants';
export const locationActions = {
    create,
};


function create(form, onSuccess=()=>{}) {
    return dispatch => {
        const {name, code} = {...form}

        locationService.create(name, code)
            .then(
                messages => {
                    dispatch(alertActions.success('location\'s created successfully'))
                    dispatch(success(form))
                    onSuccess()
                    
                },
                error => {
                    dispatch(alertActions.error(error))
                }
            )
    }
    function success(form) { return { type: modalConstants.SHOW_ADD_USER, payload: form } }
}
