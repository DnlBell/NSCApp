import { all, fork } from 'redux-saga/effects';
import yieldSearchSagas from './searchSagas';
import yieldCartSagas from './cartSagas';

function* initGlobalSaga() {
    yield all([
        fork (yieldSearchSagas),
        fork (yieldCartSagas)
    ]);
};

export default initGlobalSaga;
