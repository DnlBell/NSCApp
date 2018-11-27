import searchApi from '../api/searchApi'
import actionsTypes from '../constants/actionsTypes';
import { updateAuth, loginSubmit } from '../actions/authActions';
import { call } from 'redux-saga/effects';
import {fork} from 'redux-saga/effects';
import authApi from '../api/authApi.js';


export function* userLogin(action) {
    const userInfo = action.userInfo;
    const result = yield call((authApi.handler.userInfo);
    yield put(loginSubmit(userInfo))
}



export function* yieldAuthSagas() {
    yield all([
        fork(userLogin)
    ]);
}


export default yieldAuthSagas;