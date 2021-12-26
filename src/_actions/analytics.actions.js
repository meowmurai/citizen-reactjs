import { alertActions } from './';
import { analyticService } from '../_services';

export const analyticsAction = {
    getOccupationAction,
    getAgeDistAction,
    getCoordinateChildsAction,
    getCoordinateChildsOfLocAction,
    getCountOfSurveyAction,
};



function getOccupationAction(codes, onSuccess = () => {}) {
    return dispatch => {
        analyticService.getOccupationData(codes)
            .then(
                messages => {
                    // dispatch(alertActions.success('get occupation data successfully'))
                    onSuccess(messages);
                },
                error => {
                    dispatch(alertActions.error(error))
                }
            )
    }
}

function getAgeDistAction(codes, onSuccess = () => {}) {
    return dispatch => {
        Promise.all([
            analyticService.getAgeDistPerGender("Nam", codes),
            analyticService.getAgeDistPerGender("Nữ", codes)
        ]).then(
                ([msg_male, msg_female]) => {
                    // dispatch(alertActions.success('get age dist data successfully'))
                    onSuccess([{"Nam": msg_male.data},
                                {"Nữ": msg_female.data}]);
                },
                error => {
                    dispatch(alertActions.error(error))
                }
            )
    }
}

function getCoordinateChildsAction(onSuccess = () => {}) {
    return dispatch => {
        analyticService.getCoordinateOfChilds()
            .then(
                messages => {
                    // dispatch(alertActions.success('get coord data successfully'))
                    onSuccess(messages);
                    // console.log(messages)
                },
                error => {
                    dispatch(alertActions.error(error))
                }
            )
    }
}


function getCoordinateChildsOfLocAction(code, onSuccess = () => {}) {
    return dispatch => {
        analyticService.getCoordinateOfChildsOfLoc(code)
            .then(
                messages => {
                    // dispatch(alertActions.success('get occupation data successfully'))
                    console.log("Childs of loc: ", messages)
                    onSuccess(messages); 
                },
                error => {
                    dispatch(alertActions.error(error))
                }
            )
    }
}

function getCountOfSurveyAction(codes, onSuccess = () => {}) {
    return dispatch => {
        analyticService.getSurveyLocCountData(codes)
            .then(
                messages => {
                    dispatch(alertActions.success('get count data successfully'))
                    onSuccess(messages);
                },
                error => {
                    dispatch(alertActions.error(error))
                }
            )
    }
}