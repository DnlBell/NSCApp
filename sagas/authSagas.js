import actionTypes from '../constants/actionsTypes';
import { loginResult } from '../actions/authActions';
import{ all, call, fork, takeLatest, put } from 'redux-saga/effects';
import authApi from '../api/authApi.js';


function* userLogin(action) {
    const userInfo = action.userInfo;
    const result = yield call(authApi.handler, userInfo);
    yield put(loginResult(userInfo, result.success, result.profile, result.token));
}

function* userLoginSaga() {
    yield takeLatest(actionTypes.LOGIN_UPDATE_USER_INFO, userLogin);
}

function* yieldAuthSagas() {
    yield all([
        fork(userLoginSaga)
    ]);
}

export default yieldAuthSagas;