// userReducer.js
// userReducer manages current user profile, enrolled courses, liked courses, followed courses.

//:TODO: Fill in functionality as needed (see search reducer for example)

const userReducer = (state = {}, {type, profile, enrolled, liked, followed}) => {
    if (type === 'USER_LOGGEDIN') {
        // state = unionWith(state, {profile, enrolled, liked, followed};
    }
    if (type === 'USER_LOGGEDOUT') {
        // state = unionWith(state, {profile: null, enrolled: null, liked: null, followed: null});
    }

    return state;
};

export default userReducer;
