import actionTypes from '../constants/actionsTypes';

export function updateCart(cart = {}) {
    return {
        type: actionTypes.CART_UPDATE_ITEMS,
        cart,
    };
}