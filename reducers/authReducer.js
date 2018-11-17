// authReducers.js
// authReducer manages login state

import user from 'mspnmodel/distribution/user/user';
//

const user1 = new user();

const defaultState = {
    userinfo: user1
};

//:TODO: Fill in functionality as needed (see search reducer for example)

const authReducer = (state = defaultState, {type, username, token}) => {
    if (type === 'AUTH_LOGGEDIN') {
        // state = unionWith(state, {username, token};
        }
    if (type == 'LOGIN_UPDATE_USER_INFO') {
        
    }

    if (type === 'AUTH_LOGGEDOUT') {
    // state = unionWith(state, {username: null, token: null});
    }

    return state;
};

export default authReducer;