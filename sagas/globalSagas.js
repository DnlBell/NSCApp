import { all, fork } from 'redux-saga/effects';
import yieldSearchSagas from './searchSagas';
import yieldAuthSagas from './authSagas';

function* initGlobalSaga() {
    yield all([
        fork (yieldSearchSagas),
        fork (yieldAuthSagas)
    ]);
};

export default initGlobalSaga;
