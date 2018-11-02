// userReducer.js
// userReducer manages current user profile, enrolled courses, liked courses, followed courses.

export const userReducer = (state = {}, {profile, enrolled, liked, followed}) => {
    if (type === 'USER_LOGGEDIN') {
        // state = unionWith(state, {profile, enrolled, liked, followed};
    }

    if (type === 'USER_LOGGEDOUT') {
        // state = unionWith(state, {profile: null, enrolled: null, liked: null, followed: null});
    }

    return state;
};

