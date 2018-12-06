// searchSagas.js

import { all, call, put, fork, takeLatest } from 'redux-saga/effects';
import { receiveProducts, receiveUpdateFilter, receiveResetFilter } from '../actions/searchActions';
import actionTypes from '../constants/actionsTypes';
import searchApi from '../api/searchApi'

function* doUpdateFilter(action) {
    const filter = action.filter;
    yield put(receiveUpdateFilter(filter));
}

function* doResetFilter() {

    /* istanbul ignore next */
    yield put(receiveResetFilter());
}

function* fetchProducts (action) {
     /* istanbul ignore filter */
    const filter = action.filter;

    /* istanbul ignore next */
    yield put(receiveUpdateFilter(filter));

    /* istanbul ignore results */
    const results = yield call(searchApi.fetchProducts, filter);
    if (results) {
        
        /* istanbul ignore next */
        yield put(receiveProducts(results));
    } else {
        // :TODO: error message or something?
    }
}

function* updateFilterSaga() {
    yield takeLatest(actionTypes.SEARCH_UPDATE_FILTER, doUpdateFilter);
}

function* resetFilterSaga() {
    yield takeLatest(actionTypes.SEARCH_RESET_FILTER, doResetFilter);
}

function* fetchProductsSaga() {
    yield takeLatest(actionTypes.SEARCH_FETCH_PRODUCTS, fetchProducts);
}

function* yieldSearchSagas() {
    yield all([
        fork(updateFilterSaga),
        fork(resetFilterSaga),
        fork(fetchProductsSaga)
    ]);
}

export default yieldSearchSagas;
