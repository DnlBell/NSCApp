import actionTypes from '../constants/actionsTypes';
import { reduceUpdateCart } from '../actions/cartActions';
import{ all, call, fork, takeLatest, put } from 'redux-saga/effects';

function* cartUpdate(action){
    const cart = action.cart;
    yield put(reduceUpdateCart(cart));
}

function* cartUpdateSaga() {
    yield takeLatest(actionTypes.CART_UPDATE_ITEMS, cartUpdate)
}

function* yieldCartSagas() {
    yield all([
        fork(cartUpdateSaga)
    ]);
}

export default yieldCartSagas;