import actionsTypes from "../constants/actionsTypes";

export function receiveProfile (userProfile = {}) {
    return {
        type: actionsTypes.USER_RECEIVE_PROFILE,
        userProfile
    };
}

export function fetchProfile (action) {
    return {
        type:actionsTypes.USER_FETCH_PROFILE
    };
}