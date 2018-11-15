// authReducers.js
// authReducer manages login state
//

//:TODO: Fill in functionality as needed (see search reducer for example)

const authReducer = (state = {}, {type, username, token}) => {
    if (type === 'AUTH_LOGGEDIN') {
        // state = unionWith(state, {username, token};
        }

    if (type === 'AUTH_LOGGEDOUT') {
    // state = unionWith(state, {username: null, token: null});
    }

    return state;
};

export default authReducer;