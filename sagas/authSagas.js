import authApi from '../api/authApi'
import actionTypes from '../constants/actionsTypes';
import { receiveUpdateLogin, receiveLogin } from '../actions/authActions';
import { all, call, put, fork, takeLatest } from 'redux-saga/effects';


function* fetchLogin(action) {
    const userInfo = action.userInfo;
    yield put(receiveUpdateLogin(userInfo));
    console.log("At the authSaga");
    const results = yield call(authApi.fetchLogin, userInfo);

    if (results) {
        console.log(results);
        yield put(receiveLogin(results));
    } else {
        console.log("ERROR");
    }
}

function* fetchLoginSaga() {
    console.log("fetchLoginSaga");
    yield takeLatest(actionTypes.AUTH_FETCH_LOGIN, fetchLogin);
}

function* yieldAuthSagas() {
    yield all([
        fork(fetchLoginSaga)
    ]);
}


export default yieldAuthSagas;