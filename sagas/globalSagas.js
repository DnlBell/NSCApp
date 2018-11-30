import { all, fork } from 'redux-saga/effects';
import yieldSearchSagas from './searchSagas';
import yieldCartSagas from './cartSagas';
import yieldAuthSagas from './authSagas';

function* initGlobalSaga() {
    yield all([
        fork (yieldSearchSagas),
        fork (yieldCartSagas),
        fork (yieldAuthSagas)
    ]);
};

export default initGlobalSaga;
