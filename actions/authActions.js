import actionTypes from '../constants/actionsTypes';

export function loginSubmit(userInfo = {}) {
    return {
        type: actionTypes.LOGIN_UPDATE_USER_INFO,
        userInfo
    };
}

export function loginResult(userInfo, success, profile, token) {
    return {
        type: actionTypes.LOGIN_RECIEVE_USER_INFO,
        userInfo,
        success,
        profile,
        token
    };
}

