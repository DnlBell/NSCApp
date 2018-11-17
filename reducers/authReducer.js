// authReducers.js
// authReducer manages login state

import User from 'mspnmodel/distribution/user/user';
import extend from 'lodash/extend';
import actionTypes from '../constants/actionsTypes';
//

const initialUser = new User();
initialUser.uid = '';
initialUser.pwd = '';

const defaultState = {
    authUser: initialUser,             // current filter object
};

//:TODO: Fill in functionality as needed (see search reducer for example)

function authReducer (state = defaultState, {type, username, token}) {
    switch (type) {
        case actionTypes.AUTH_RECEIVE_UPDATE_LOGIN:
            return reduceUpdateLogin(state, {type, username, token});
        case actionTypes.AUTH_RECEIVE_LOGIN:
            return reduceAuthResults(state, {type, username, token});
    };
    console.log("AuthReducer: ", state)
    return state;
};

function reduceUpdateLogin(state, {type, username, token}) {
    const newState = extend({}, state, {type, username, token});
    console.log(newState);
    return newState;
}

function reduceAuthResults(state, action) {
    // :TODO: Implement
        const newState = extend({}, state, {type, username, token});
        return newState;
}

export default authReducer;