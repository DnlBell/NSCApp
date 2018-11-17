import actionTypes from '../constants/actionsTypes';

export function fetchLogin(userInfo = {}) {
    console.log("Here's the authActions");
    return {
        type: actionTypes.AUTH_FETCH_LOGIN,
        userInfo,
    };
}

export function receiveUpdateLogin(userInfo) {
    return {
        type: actionTypes.AUTH_RECEIVE_UPDATE_LOGIN,
        userInfo,
    };
}

export function receiveLogin(results) {
    return {
        type: actionTypes.AUTH_RECEIVE_LOGIN,
        results,
    }
}