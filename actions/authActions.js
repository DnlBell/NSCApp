import actionTypes from '../constants/actionsTypes';

export function loginSubmit(userInfo = {}) {
    return {
        type: actionTypes.LOGIN_UPDATE_USER_INFO,
        userInfo,
    };
}

