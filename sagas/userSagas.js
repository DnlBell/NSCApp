import { receiveProfile, fetchProfile } from '../actions/userActions';
import userApi from '../api/userApi';

function* fetchProfile (action) {
    const profile = action.profile;
    yield put(receiveProfile(profile));

    const results = yield call(userApi.fetchProfile, token);
    if (results) {
        // console.log('   course count:', results.courses.length);
        yield put(receiveProducts(results));
    } else {
        // :TODO: error message or something?
    }
}