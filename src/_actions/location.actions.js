import { alertActions } from './';
import { locationService } from '../_services';
import { modalActions } from './modal.actions';
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
                    modalActions.addUserToExistLocation(form)
                    onSuccess()
                    
                },
                error => {
                    dispatch(alertActions.error(error))
                }
            )
    }
}
