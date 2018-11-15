import { all, fork } from 'redux-saga/effects';
import yieldSearchSagas from './searchSagas';

function* initGlobalSaga() {
    yield all([
        fork (yieldSearchSagas)
    ]);
};

export default initGlobalSaga;
