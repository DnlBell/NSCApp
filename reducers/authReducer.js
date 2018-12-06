// authReducers.js
// authReducer manages login state

import user from 'mspnmodel/distribution/user/user';
import extend from 'lodash/extend';
import actionTypes from '../constants/actionsTypes';

const user1 = new user();

const defaultState = {
    userInfo: user1
};

//:TODO: Fill in functionality as needed (see search reducer for example)

function reduceLoginResult(state, action) {
    console.log('reduceLoginResult', action);
    const { userInfo, success, profile, token } = action;

    if (success) {
        const newUser = new user();
        newUser.uid = userInfo.uid;
        newUser.token = token;
        newUser.lastSuccess = success;

        const newState = extend({}, state, {});
        console.log(newState);
        return newState;
    }

    // otherwise do nothing and just return the same old state if login failed.
    return state;
}


const authReducer = (state = defaultState, action) => {
    console.log('autReducer', action);

    switch (action.type) {
        case actionTypes.LOGIN_RECIEVE_USER_INFO:
            return reduceLoginResult(state, action);
    }

    return state;
};

export default authReducer;